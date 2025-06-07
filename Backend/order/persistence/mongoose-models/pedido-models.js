import mongoose from 'mongoose';
import CompraSchema from './compra-models.js';



const PedidoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  estado: { type: String, required: true },
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now },
  total: { type: Number, required: true },
  metodo_pago: { type: String, required: true },
  pagado: { type: Boolean, default: false },
  compra: [CompraSchema]
},
);

const Pedido = mongoose.model('pedido', PedidoSchema);

export default Pedido;