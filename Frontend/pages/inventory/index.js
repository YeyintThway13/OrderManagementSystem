import Layout from "@/components/Common/Layout";
import Navbar from "@/components/Common/Navbar";
import TableHeader from "@/components/Common/TableHeader";
import InventoryTable from "@/components/InventoryTable";

function Inventory() {
  const inventories = [
    {
      ref_code: "REF001",
      description: "Description for REF001",
      date: "2023-12-01",
      vendor: "Vendor A",
      adjusted_by: "user_id_1",
      adjustment_items: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more adjustment items as needed
      ],
      reason: "damaged",
      created_at: "2023-12-01",
      updated_at: "2023-12-01",
    },
    {
      ref_code: "REF002",
      description: "Description for REF002",
      date: "2023-12-01",
      vendor: "Vendor B",
      adjusted_by: "user_id_2",
      adjustment_items: [
        {
          product_id: "product_id_2",
          quantity: 10,
          unit: "packs",
        },
        // Add more adjustment items as needed
      ],
      reason: "purchase",
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
          description="A list of all inventories including their information."
        />
        <InventoryTable data={inventories} />
      </div>
    </Layout>
  );
}

export default Inventory;
