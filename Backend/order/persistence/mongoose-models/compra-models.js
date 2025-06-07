import mongoose from "mongoose";

const CompraSchema = new mongoose.Schema({
    producto_id: { type: Number, required: true },
    precio: { type: Number, required: true },
    nota_personal: { type: String },
    fecha_compra: { type: Date, default: Date.now },
    fecha_entrega_estimada: { type: Date },
    fecha_entregado: { type: Date },
    devuelto: { type: Boolean, default: false },
    motivo_devolucion: { type: String }
  },
);

export default CompraSchema;