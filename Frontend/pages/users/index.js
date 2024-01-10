import Layout from "@/components/Common/Layout";
import TableHeader from "@/components/Common/TableHeader";
import UserTable from "@/components/UserTable";

function User() {
  const users = [
    {
      username: "Yeyint Thway",
      email: "yeyintthway656@gmail.com",
      role: "Admin",
      created_at: "2023-12-01",
      updated_at: "2023-12-01",
    },
    {
      username: "Yeyint Thway",
      email: "yeyintthway656@gmail.com",
      role: "Admin",
      created_at: "2023-12-01",
      updated_at: "2023-12-01",
    },
    {
      username: "Yeyint Thway",
      email: "yeyintthway656@gmail.com",
      role: "Admin",
      created_at: "2023-12-01",
      updated_at: "2023-12-01",
    },
    {
      username: "Yeyint Thway",
      email: "yeyintthway656@gmail.com",
      role: "Admin",
      created_at: "2023-12-01",
      updated_at: "2023-12-01",
    },
    {
      username: "Yeyint Thway",
      email: "yeyintthway656@gmail.com",
      role: "Admin",
      created_at: "2023-12-01",
      updated_at: "2023-12-01",
    },
    // Add more mock adjustment objects as needed
  ];

  return (
    <Layout>
      <div className="w-[100%] p-10">
        <TableHeader
          tableHeader="Inventory"
          description="A list of all user including their information."
        />
        <UserTable data={users} />
      </div>
    </Layout>
  );
}

export default User;
