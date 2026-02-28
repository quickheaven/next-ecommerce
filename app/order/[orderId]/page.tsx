import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import OrderItem from "./order-item";
import OrderSummary from "./order-summary";
import { auth } from "@/lib/auth";
import { Breadcrumbs } from "@/components/breadcrumbs";

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

  const session = await auth();
  const isOwner = session?.user?.id === order.userId;

  return (
    <main className="container mx-auto py-4">
      {isOwner && (
        <Breadcrumbs
          items={[
            {
              label: "My Account",
              href: "/account",
            },
            {
              label: "Order",
              href: `/order/${order.id}`,
            },
          ]}
        />
      )}
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
