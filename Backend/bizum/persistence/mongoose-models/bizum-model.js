import mongoose from 'mongoose';
import ProductSchema from './cart-model.js';

const BizumSchema = new mongoose.Schema({
  total: Number,
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
  cart: { type: [ProductSchema], required: true }
}, {
  timestamps: true
});

const Bizum = mongoose.model('bizum', BizumSchema);

export default Bizum;