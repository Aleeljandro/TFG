import express from "express";
import mongoose from 'mongoose';
import pedidoRouter from "./order/controllers/pedido-controller.js";
import userRouter from "./users/controllers/user-controller.js";
import productRouter from "./products/Controllers/product-controller.js";
import bizumRouter from "./bizum/controllers/bizum-controller.js";



const app = express();
const port = process.env.PORT || 9090;

// Database config, will be move to another module in future
await mongoose.connect('mongodb://127.0.0.1:27017/tienda_db');


// Middleware to parse JSON bodies
app.use(express.json());

// Routing modules
app.use('/api/pedidos', pedidoRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/bizums', bizumRouter)

// Static files serving
app.use(express.static('build'))
// Starting to listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});