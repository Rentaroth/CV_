import { Model } from "mongoose";
import { User } from "../database/mongo/models/ts_types";
import { Types } from "mongoose";

class BaseRepository {
  model: Model<User>
  constructor(model: Model<User>) {
    this.model = model;
  }

  async create(data: User) {
    const instance = new this.model({ ...data });
    await instance.save();
    const temp = instance.toJSON();
    return temp;
  }

  async read(id: string | undefined) {
    if(id) {
      const result = await this.model.findById(id);
      return result;
    };
    const result = await this.model.find();
    return result;
  }

  async update(data: User, id: string | undefined) {
    const result = await this.model.findByIdAndUpdate(id, data);
    return result;
  }

  async delete(id: string | undefined) {
    const result = await this.model.findByIdAndDelete(id);
    return result;
  }
};

export { BaseRepository };