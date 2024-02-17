import Order from "@/app/models/Order";
import connectDB from "@/app/middleware/connectDB";
import Product from "@/app/models/Product";
import { redirect } from "next/navigation";

export async function orderUpdate(orderInfo) {
  const mongoDB = await connectDB();
  console.log(mongoDB);
  const data = orderInfo;

  let order;
  if (data.STATUS === "TXN_SUCCESS") {
    order = await Order.findOneAndUpdate(
      { orderId: data.ORDERID },
      { status: "Paid", paymentInfo: JSON.stringify(data) }
    );

    // Update product quantity
    let products = order.products;
    for (let slug in products) {
      await Product.findOneAndUpdate(
        { slug },
        { $inc: { availableQuantity: -products[slug].quantity } }
      );
    }
  } else if (data.STATUS === "PENDING") {
    order = await Order.findOneAndUpdate(
      { orderId: data.ORDERID },
      { status: "Pending", paymentInfo: JSON.stringify(data) }
    );
  }

  return order._id;
}
