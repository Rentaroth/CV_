import { Request, Response } from "express";
import { createLanguagesHelper, updateLanguagesHelper, obtainLanguagesHelper, deleteLanguagesHelper } from "./helper";

async function createLanguagesController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await createLanguagesHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainLanguagesController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await obtainLanguagesHelper(id);
  res.send({ response: result }).status(200);
}

async function updateLanguagesController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await updateLanguagesHelper(id, data);
  res.send({ response: result }).status(200);
}

async function deleteLanguagesController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteLanguagesHelper(id);
  res.send({ response: result }).status(200);
}

export {
  createLanguagesController,
  obtainLanguagesController,
  updateLanguagesController,
  deleteLanguagesController,
}