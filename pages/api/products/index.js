import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  if (request.method === "GET") {
    await dbConnect();

    const products = await Product.find({});
    return response.status(200).json(products);
  }

  return response.status(405).json({ message: "Method not allowed" });
}
