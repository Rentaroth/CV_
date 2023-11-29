import { Request, Response } from "express";
import { userCreationHelper, userDeleteHelper, userObtentionHelper, userUpdateHelper } from "./helper";

async function greet(req: Request, res: Response) {
  res.status(200).send('Controller is up!')
}

async function createUserController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await userCreationHelper(data);
  res.send({ response: result }).status(201);
}

async function obtainUserController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await userObtentionHelper(id);
  res.send({ response: result }).status(200);
}

async function updateUserController(req: Request, res: Response) {
  const { id } = req.params;
  const { data } = req.body;
  const result = await userUpdateHelper(id, data);
  res.send({ response: result }).status(200);
}

async function deleteUserController(req: Request, res: Response) {
  const { id } = req.params;
  const result = await userDeleteHelper(id);
  res.send({ response: result }).status(200);
}

export {
  greet,
  createUserController,
  obtainUserController,
  updateUserController,
  deleteUserController,
}