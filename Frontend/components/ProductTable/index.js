import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductTable({ data }) {
  return (
    <div className="w-[100%] max-w-[1200px]">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0  min-w-[120px] px-8"
                  >
                    Item Code
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0  min-w-[80px] px-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[150px] px-8"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[100px] px-8"
                  >
                    Sale Price
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[100px] px-8"
                  >
                    Stock Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[100px] px-8"
                  >
                    Unit
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[120px] px-8"
                  >
                    Threshold Value
                  </th>{" "}
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[80px] px-8"
                  >
                    Returnable
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Created By
                  </th>{" "}
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Updated At
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((item) => (
                  <tr key={item.item_code}>
                    <td className="flex items-center gap-1 whitespace-nowrap py-4 text-sm text-gray-500">
                      <PlusCircleIcon
                        className="h-6 w-6 shrink-0 text-blue-600 cursor-pointer"
                        aria-hidden="true"
                      ></PlusCircleIcon>
                      {item.item_code}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.name}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.description}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.sale_price}
                    </td>
                    <td className="flex items-center whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.stock_quantity < item.stock_thresh_hold_value && (
                        <ExclamationTriangleIcon
                          className="h-6 w-6 shrink-0 text-red-600 cursor-pointer"
                          aria-hidden="true"
                        ></ExclamationTriangleIcon>
                      )}

                      {item.stock_quantity}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.unit}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500 text-center">
                      {item.stock_thresh_hold_value}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.returnable.toString()}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.created_by}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.created_at}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.updated_at}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {item.name}</span>
                      </a>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete<span className="sr-only">, {item.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
