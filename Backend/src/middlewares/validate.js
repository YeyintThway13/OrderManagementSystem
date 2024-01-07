const { validationResult } = require("express-validator");

const validate = (allowedFields) => (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    req.body = Object.keys(req.body)
      .filter((key) => allowedFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = req.body[key];
        return obj;
      }, {});

    return next();
  }

  return res.status(422).json({ errors: errors.array()[0].msg });
};

module.exports = {
  validate,
};
