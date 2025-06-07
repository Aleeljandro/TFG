import express from "express";
import UserRepository from "../persistence/repositories/UserRepository.js";
import UserService from "../services/UserService.js";

const userRouter = express.Router()

userRouter.post('/', async (req, res) => {
    console.log(req.body);   
    const pedidoRepository = new UserRepository();
    const pedidoService = new UserService(pedidoRepository);
    const user = req.body;
    const loginResult = await pedidoService.register(user);

    res.send(loginResult);    
 });

userRouter.put('/', async (req, res) => {
    console.log(req.body);   
    const pedidoRepository = new UserRepository();
    const pedidoService = new UserService(pedidoRepository);
    const user = req.body;
    const registryResult = await pedidoService.login(user);

    res.send(registryResult);    
 });

export default userRouter;