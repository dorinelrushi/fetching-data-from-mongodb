import { initiMongoose } from "../../../lib/mongoose";
import Product from "../../../models/Product";

export default async function handle(req, res) {
  await initiMongoose();
  res.json(await Product.find().exec());
}
