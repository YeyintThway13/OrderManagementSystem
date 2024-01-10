export default function OrderTable({ data }) {
  return (
    <div className="w-[100%] max-w-[1200px]">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    key="order_code"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Order Code
                  </th>

                  <th
                    key="products"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[150px]"
                  >
                    Products
                  </th>

                  <th
                    key="expected_shipment_date"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[150px]"
                  >
                    Expected Shipment Date
                  </th>

                  <th
                    key="delivery_method"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Delivery Method
                  </th>

                  <th
                    key="customer_note"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[180px]"
                  >
                    Customer Note
                  </th>

                  <th
                    key="payment_method"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Payment Method
                  </th>

                  <th
                    key="payment_status"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Payment Status
                  </th>

                  <th
                    key="status"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Status
                  </th>

                  <th
                    key="order_by"
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 px-8 min-w-[120px]"
                  >
                    Order By
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
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((order) => (
                  <tr key={order?.item_code}>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.order_code}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.products?.map((prod) => (
                        <p key={prod}>
                          {prod.product_id},{prod.quantity}
                        </p>
                      ))}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.expected_shipment_date}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.delivery_method}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.customer_note}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.payment_method}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.payment_status}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.status}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.order_by}
                    </td>

                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.created_at}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {order?.updated_at}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
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
