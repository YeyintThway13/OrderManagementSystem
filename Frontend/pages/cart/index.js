import CartTable from "@/components/CartTable";
import Layout from "@/components/Common/Layout";
import Navbar from "@/components/Common/Navbar";
import TableHeader from "@/components/Common/TableHeader";

const cart = [
  {
    item_code: "ABC123",
    name: "Item 1",
    description: "Description for Item 1",
    sale_price: 19.99,
    quantity: 100,
    unit: "pieces",
  },
  {
    item_code: "DEF456",
    name: "Item 2",
    description: "Description for Item 2",
    sale_price: 29.99,
    quantity: 50,
    unit: "packs",
  },
  {
    item_code: "ABC123",
    name: "Item 1",
    description: "Description for Item 1",
    sale_price: 19.99,
    quantity: 100,
    unit: "pieces",
  },
  {
    item_code: "DEF456",
    name: "Item 2",
    description: "Description for Item 2",
    sale_price: 29.99,
    quantity: 50,
    unit: "packs",
  },
  {
    item_code: "ABC123",
    name: "Item 1",
    description: "Description for Item 1",
    sale_price: 19.99,
    quantity: 100,
    unit: "pieces",
  },
  {
    item_code: "DEF456",
    name: "Item 2",
    description: "Description for Item 2",
    sale_price: 29.99,
    quantity: 50,
    unit: "packs",
  },
  {
    item_code: "ABC123",
    name: "Item 1",
    description: "Description for Item 1",
    sale_price: 19.99,
    quantity: 100,
    unit: "pieces",
  },
  {
    item_code: "DEF456",
    name: "Item 2",
    description: "Description for Item 2",
    sale_price: 29.99,
    quantity: 50,
    unit: "packs",
  },
];
export default function Cart() {
  return (
    <Layout>
      <div className="w-[100%] p-10">
        <TableHeader
          tableHeader="Cart"
          description="A list of all products in the cart including their information."
          btnText="Make Order"
        />
        <CartTable data={cart} />
      </div>
    </Layout>
  );
}
