export default function UserTable({ data }) {
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
                    Username
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0  min-w-[80px] px-8"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-left text-sm font-semibold text-gray-900 sm:pl-0 min-w-[150px] px-8"
                  >
                    Role
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
                {data?.map((item) => (
                  <tr key={item.email}>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.username}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.email}
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      {item.role}
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
