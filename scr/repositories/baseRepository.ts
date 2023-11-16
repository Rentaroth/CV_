import { Model } from "mongoose";
import { User } from "../database/mongo/models/ts_types";

class BaseRepository {
  model: Model<User>
  constructor(model: Model<User>) {
    this.model = model;
  }

  async create(data: User) {
    const instance = new this.model({ ...data })
    await instance.save()
    const temp = instance.toJSON();
    return temp;
  }

  async read(id: number) {}

  async update(data: User) {}

  async delete(id: number) {}
};

export { BaseRepository };