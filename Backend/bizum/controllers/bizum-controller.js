import express from "express";
import BizumRepository from "../persistence/repositories/BizumRepository.js";
import BizumService from "../services/BizumService.js";

const bizumRouter = express.Router();
const repository = new BizumRepository();
const service = new BizumService(repository);

// POST /api/bizum
bizumRouter.post("/", async (req, res) => {
  try {
    const result = await service.submitBizum(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el bizum" });
  }
});

// GET /api/bizum
bizumRouter.get("/", async (req, res) => {
  try {
    const bizums = await service.listBizums();
    res.status(200).json(bizums);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los bizums" });
  }
});

export default bizumRouter;