import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import OrderItem from "./order-item";
import OrderSummary from "./order-summary";

interface OrderPageProps {
  params: Promise<{
    orderId: string;
  }>;
}

export default async function OrderPage({ params }: OrderPageProps) {
  const { orderId } = await params;

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    notFound();
  }

  return (
    <main className="container mx-auto py-4">
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>Status: {order.status}</p>
      <h2>Items</h2>
      <ul>
        {order.items.map((item) => (
          <OrderItem key={item.id} orderItem={item} />
        ))}
      </ul>
      <OrderSummary order={order} />
    </main>
  );
}
