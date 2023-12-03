import dotenv from "dotenv";
import { _config } from "./ts_types/config.types";

dotenv.config()

export const config: _config = {
  db: {
    active: process.env.DATABASE || 'mongo',
    mongo: {
      uri: process.env.MONGO_URI || 'none',
    },
  }
}