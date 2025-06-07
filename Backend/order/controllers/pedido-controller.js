import express from "express";
import PedidoService from '../services/PedidoServices.js';
import PedidoRepository from "../persistence/repositories/PedidoRepository.js";


const pedidoRouter = express.Router()

pedidoRouter.get('/', async (req, res) => {
  /* 
  There only goes logic relate with proccesing a responding in http json 
  and instantiate infra elements like repositories for dependency inversion of bussiness in the services.
  */
  const pedidoRepository = new PedidoRepository();
  const pedidoService = new PedidoService(pedidoRepository);
  const pedidoOne = await pedidoService.getPedidoOne();
  res.send(pedidoOne)
})

pedidoRouter.get('/test', async (req, res) => {

  res.send({
    "funcion": "miarma"
  })
})
export default pedidoRouter;