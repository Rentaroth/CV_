import { Request, Response } from "express";
import { createExperienceHelper, deleteExperienceHelper, obtainExperienceHelper, updateExperienceHelper } from "./helper";

async function createExperienceController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await createExperienceHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainExperienceController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await obtainExperienceHelper(id);
  res.send({ response: result }).status(200);
}

async function updateExperienceController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await updateExperienceHelper(id, data);
  res.send({ response: result }).status(200);
}

async function deleteExperienceController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteExperienceHelper(id);
  res.send({ response: result }).status(200);
}

export {
  createExperienceController,
  obtainExperienceController,
  updateExperienceController,
  deleteExperienceController,
}