import express from "express";
import mongoose from 'mongoose';
import pedidoRouter from "./order/controllers/pedido-controller.js";
import userRouter from "./users/controllers/user-controller.js";
import productRouter from "./products/Controllers/product-controller.js";
import bizumRouter from "./bizum/controllers/bizum-controller.js";

const app = express();
const port = process.env.PORT || 9090;

// MongoDB Atlas connection using environment variables
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// Asegurate de reemplazar <tu-cluster> con el nombre real de tu cluster Atlas
const uri = `mongodb+srv://${dbUser}:${dbPassword}@fiu.vmfee07.mongodb.net/?retryWrites=true&w=majority&appName=Fiu`;

try {
  await mongoose.connect(uri);
  console.log("✅ Conectado a MongoDB Atlas");
} catch (error) {
  console.error("❌ Error al conectar a Mongo:", error);
}

// Middleware to parse JSON bodies
app.use(express.json());

// Routing modules
app.use('/api/pedidos', pedidoRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/bizums', bizumRouter);

// Static files serving
app.use(express.static('build'));

// Start the server
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
