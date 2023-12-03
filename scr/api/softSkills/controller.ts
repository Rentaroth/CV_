import { Request, Response } from "express";
import { createSoftSkillsHelper, updateSoftSkillsHelper, obtainSoftSkillsHelper, deleteSoftSkillsHelper } from "./helper";

async function createSoftSkillsController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await createSoftSkillsHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainSoftSkillsController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await obtainSoftSkillsHelper(id);
  res.send({ response: result }).status(200);
}

async function updateSoftSkillsController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await updateSoftSkillsHelper(id, data);
  res.send({ response: result }).status(200);
}

async function deleteSoftSkillsController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await deleteSoftSkillsHelper(id);
  res.send({ response: result }).status(200);
}

export {
  createSoftSkillsController,
  obtainSoftSkillsController,
  updateSoftSkillsController,
  deleteSoftSkillsController,
}