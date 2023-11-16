import { BaseRepository } from "./baseRepository";
import { UserModel } from "../database/mongo/models/user.model";

class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel);
  }
};

export { UserRepository };