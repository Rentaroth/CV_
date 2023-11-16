import mongoose from "mongoose";
import { config } from "../../config";

async function main(): Promise<void> {
  try {
    await mongoose.connect(config.db.mongo.uri);  
  } catch (error) {
    console.error(error);
  }
};

export { main }