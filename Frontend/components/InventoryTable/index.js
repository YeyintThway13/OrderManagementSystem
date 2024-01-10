export default function InventoryTable({ data }) {
  return (
    <div className="w-[100%] max-w-[1200px]">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    key="ref_code"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0  px-8 min-w-[140px]"
                  >
                    Reference Code
                  </th>
                  <th
                    key="description"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[180px]"
                  >
                    Description
                  </th>
                  <th
                    key="date"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Date
                  </th>
                  <th
                    key="vendor"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Vendor
                  </th>
                  <th
                    key="adjusted_by"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Adjusted By
                  </th>
                  <th
                    key="adjustment_items"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[150px]"
                  >
                    Adjustment Items
                  </th>
                  <th
                    key="reason"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Reason
                  </th>
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((adjustment) => (
                  <tr key={adjustment?.ref_code}>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.ref_code}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.description}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.date.toString()}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.vendor}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.adjusted_by}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.adjustment_items?.map((prod) => (
                        <p key="prod">
                          {prod.product_id},{prod.quantity}
                        </p>
                      ))}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.reason}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.created_at.toString()}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {adjustment?.updated_at.toString()}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
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
