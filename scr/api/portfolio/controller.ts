import { Request, Response } from "express";
import { createPortfolioHelper, updatePortfolioHelper, obtainPortfolioHelper, deletePortfolioHelper } from "./helper";

async function createPortfolioController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await createPortfolioHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainPortfolioController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await obtainPortfolioHelper(id);
  res.send({ response: result }).status(200);
}

async function updatePortfolioController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await updatePortfolioHelper(id, data);
  res.send({ response: result }).status(200);
}

async function deletePortfolioController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deletePortfolioHelper(id);
  res.send({ response: result }).status(200);
}

export {
  createPortfolioController,
  obtainPortfolioController,
  updatePortfolioController,
  deletePortfolioController,
}