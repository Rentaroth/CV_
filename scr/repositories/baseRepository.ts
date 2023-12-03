import { Model } from "mongoose";
import { Education, Experience, User } from "../config/ts_types";

class BaseRepository {
  model: Model<User | Experience | Education>
  constructor(model: Model<User | Experience | Education>) {
    this.model = model;
  }

  async create(data: User | Experience | Education) {
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

  async update(data: User | Experience | Education, id: string | undefined) {
    const result = await this.model.findOneAndUpdate({ _id: id }, data, { new: true });
    return result;
  }

  async delete(id: string | undefined) {
    const result = await this.model.findByIdAndDelete(id);
    return result;
  }
};

export { BaseRepository };