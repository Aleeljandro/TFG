import express from "express";
import ProductRepository from "../persistence/repositories/ProductRepository.js";
import ProductService from "../Services/ProductService.js";


const productRouter = express.Router();
const repository = new ProductRepository();
const service = new ProductService(repository);

// GET /products/gorros
productRouter.get('/gorros', async (req, res) => {
  try {
    const gorros = await service.getByTipo('gorro');
    res.json(gorros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /products/heros
productRouter.get('/heros', async (req, res) => {
  try {
    const heros = await service.getByTipo('hero');
    res.json(heros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default productRouter;
