import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
import { main } from "./scr/database/mongo";
import { config } from "./scr/config";

if(config.db.active === "mongo") {
  main();
  console.log('[DB] Connected!');
};

const app: Express = express();

app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(router());

export { app };