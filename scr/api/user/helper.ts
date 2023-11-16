import { User } from "../../database/mongo/models/ts_types";
import { UserEntity } from "./entity";

async function userCreationHelper(data: User) {
  let info = {
    ... data,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const entity: UserEntity = new UserEntity(info);
  try {
    const result = await entity.userCreationMethod();
    return result;
  } catch (error: any) {
    console.error(error);
    if(error.code === 11000) {
      return {error: { code: 11000, message: `Duplicate value. Email '${error.keyValue.email}' already exists.` }};
    }
  }
}

export {
  userCreationHelper,
}