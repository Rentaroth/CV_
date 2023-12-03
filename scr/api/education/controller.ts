import { Request, Response } from "express";
import { educationCreationHelper, educationDeleteHelper, educationObtentionHelper, educationUpdateHelper } from "./helper";

async function createEducationController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await educationCreationHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainEducationController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await educationObtentionHelper(id);
  res.send({ response: result }).status(200);
}

async function updateEducationController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await educationUpdateHelper(data, id);
  res.send({ response: result }).status(200);
}

async function deleteEducationController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await educationDeleteHelper(id);
  res.send({ response: result }).status(200);
}

export {
  createEducationController,
  obtainEducationController,
  updateEducationController,
  deleteEducationController,
}