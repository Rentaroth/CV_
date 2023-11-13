import express from "express";
import { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

const port: number = 3000;

app.listen(port, () => {
  console.log(`[Server]: Server listening at port ${port}`)
});