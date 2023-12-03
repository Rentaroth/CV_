import { Request, Response } from "express";
import { createSkillsHelper, updateSkillsHelper, obtainSkillsHelper, deleteSkillsHelper } from "./helper";

async function createskillsController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await createSkillsHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainskillsController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await obtainSkillsHelper(id);
  res.send({ response: result }).status(200);
}

async function updateskillsController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await updateSkillsHelper(id, data);
  res.send({ response: result }).status(200);
}

async function deleteskillsController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteSkillsHelper(id);
  res.send({ response: result }).status(200);
}

export {
  createskillsController,
  obtainskillsController,
  updateskillsController,
  deleteskillsController,
}