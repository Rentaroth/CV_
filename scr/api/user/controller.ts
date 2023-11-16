import { Request, Response } from "express";
import { userCreationHelper } from "./helper";

async function greet(req: Request, res: Response) {
  res.status(200).send('Controller is up!')
}

async function createUserController(req: Request, res: Response) {
  const { data } = req.body;
  const result = await userCreationHelper(data);
  res.send({ response: result }).status(201);
}

export {
  greet,
  createUserController,
}