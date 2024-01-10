export default function CartTable({ data }) {
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
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[100px] px-8"
                  >
                    Unit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((item) => (
                  <tr key={item.item_code}>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
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
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.quantity}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.unit}
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
