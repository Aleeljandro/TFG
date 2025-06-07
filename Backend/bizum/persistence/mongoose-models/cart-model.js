import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: String,
    color: String,
    price: { type: String, required: true },
    originalPrice: String,
    discount: String,
    image: String
  });


export default ProductSchema;
