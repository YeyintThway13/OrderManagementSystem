const APIFeatures = require("../utils/api-features");
const asyncHandler = require("../utils/async-handler");
const { NotFoundError } = require("../utils/errors");
const Redis = require("ioredis");

const util = require("util");
require("dotenv").config();

// Create a Redis client
const client = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
const getAsync = util.promisify(client.get).bind(client);

console.log(process.env.REDIS_HOST, process.env.REDIS_PORT);

exports.getAll =
  (Model, searchOption = []) =>
  async (req, res) => {
    try {
      const { paramFilter, search, sort, select, populate, page, limit } =
        req.query;

      const defaultFilter = req?.defaultFilter || {};

      const resouce = req.originalUrl;

      const cacheKey = `all:${resouce}:${JSON.stringify(
        req.query
      )}:${JSON.stringify(defaultFilter)}:${
        req.user?.role === "Customer" ? req.user?._id : req.user?.role
      }`;

      const cachedData = await getAsync(cacheKey);

      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        console.log("From Cache Data Response");
        return res.json(parsedData);
      }

      const parsedParamFilter = paramFilter ? JSON.parse(paramFilter) : {};

      const parsedFilter = { ...defaultFilter, ...parsedParamFilter };

      // Filter
      const filterQuery = {};
      if (parsedFilter) {
        Object.keys(parsedFilter).forEach((field) => {
          filterQuery[field] = { $in: parsedFilter[field] };
        });
      }

      // Search

      const searchQuery = {};
      if (search) {
        const regex = new RegExp(search, "i");
        searchQuery["$or"] = searchOption.map((field) => ({
          [field]: regex,
        }));
      }

      // Combine filter and search queries
      const query = { ...filterQuery, ...searchQuery };

      // Sort
      const sortOption = sort ? JSON.parse(sort) : {};

      // Select
      const selectOption = select ? select.split(",").join(" ") : "";

      // Populate
      const populateOption = populate ? populate.split(",").join(" ") : "";

      // Pagination
      const currentPage = parseInt(page, 10) || 1;
      const limitPerPage = parseInt(limit, 10) || 10;
      const skip = (currentPage - 1) * limitPerPage;

      // Query the database
      const totalCountPromise = Model.countDocuments(query);
      const dataPromise = Model.find(query)
        .sort(sortOption)
        .select(selectOption)
        .populate(populateOption)
        .skip(skip)
        .limit(limitPerPage)
        .lean();

      const [totalCount, data] = await Promise.all([
        totalCountPromise,
        dataPromise,
      ]);

      const totalPages = Math.ceil(totalCount / limitPerPage) || 1;

      await client.set(
        cacheKey,
        JSON.stringify({
          data,
          pagination: {
            currentPage,
            totalPages,
            totalCount,
          },
        }),
        "EX",
        10
      );

      console.log("From Normal Response");

      res.json({
        data,
        pagination: {
          currentPage,
          totalPages,
          totalCount,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

exports.getOneById = (Model) =>
  asyncHandler(async (req, res, next) => {
    const resouce = req.originalUrl;

    const cacheKey = `getDetails:${resouce}:${JSON.stringify(req.query)}:${
      req.user?.role === "Customer" ? req.user?._id : req.user?.role
    }`;
    const cachedData = await getAsync(cacheKey);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      console.log("From Cache Data Response");
      return res.status(200).json({
        status: "success",
        data: parsedData,
      });
    }

    const features = new APIFeatures(Model.findById(req.params.id), req.query)
      .select()
      .populate();

    const doc = await features.query;

    if (!doc) return next(new NotFoundError("No document found with that ID"));

    await client.set(cacheKey, JSON.stringify({ doc }), "EX", 10);

    res.status(200).json({
      status: "success",
      data: doc,
    });
  });

exports.createOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const newDoc = new Model({
      ...req.body,
    });

    // 1) Check if user exists in request object
    if (req.user) {
      newDoc.createdBy = req.user._id;
    }

    await newDoc.save();

    res.status(201).json({
      status: "success",
      data: newDoc,
    });
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const updatedDoc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedDoc)
      return next(new NotFoundError("No doc found with that ID", 404));

    res.status(200).json({
      status: "success",
      data: updatedDoc,
    });
  });

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const deletedDoc = await Model.findByIdAndDelete(req.params.id);

    if (!deletedDoc)
      return next(new NotFoundError("No doc found with that ID", 404));

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
