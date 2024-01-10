import Layout from "@/components/Common/Layout";
import Navbar from "@/components/Common/Navbar";
import TableHeader from "@/components/Common/TableHeader";
import OrderTable from "@/components/OrderTable";

function Orders() {
  const orders = [
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER002",
      products: [
        {
          product_id: "product_id_2",
          quantity: 10,
          unit: "packs",
        },
        {
          product_id: "product_id_3",
          quantity: 10,
          unit: "packs",
        },
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Express Shipping",
      customer_note: "Urgent delivery requested",
      payment_method: "PayPal",
      payment_status: "Done",
      status: "Delivered",
      order_by: "user_id_2",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
    {
      order_code: "ORDER001",
      products: [
        {
          product_id: "product_id_1",
          quantity: 5,
          unit: "pieces",
        },
        // Add more products as needed
      ],
      expected_shipment_date: "2023-03-03",
      delivery_method: "Courier",
      customer_note: "Please handle with care",
      payment_method: "Credit Card",
      payment_status: "Pending",
      status: "Processing",
      order_by: "user_id_1",
      created_at: "2023-03-03",
      updated_at: "2023-03-03",
    },
  ];
  return (
    <Layout>
      <div className="w-[100%] p-10">
        <TableHeader
          tableHeader="Orders"
          description="A list of all orders including their information."
        />
        <OrderTable data={orders} />
      </div>
    </Layout>
  );
}

export default Orders;
