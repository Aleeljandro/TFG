import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  nombre:       { type: String, required: true },
  descripcion:  { type: String, required: true },
  precio:       { type: Number, required: true },
  imagen:       { type: String, required: true },
  descuento:    { type: Number, default: 0 },
  tipo:         { type: String, required: true, enum: ['hero', 'gorro'] },
}, {
  timestamps: true
});

const Product = mongoose.model('product', ProductSchema);
export default Product;
