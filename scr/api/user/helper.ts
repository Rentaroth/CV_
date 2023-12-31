import { ObjectId } from "mongodb";
import { User } from "../../config/ts_types";
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

async function userObtentionHelper(id : string) {
  const entity = new UserEntity({ id });
  try {
    const result = await entity.userReadMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function userUpdateHelper(id: string, data: User) {
  let info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new UserEntity(info);
  try {
    const result = await entity.userUpdateMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function userDeleteHelper(id: string) {
  const entity = new UserEntity({ id });
  try {
    const result = await entity.userDeleteMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export {
  userCreationHelper,
  userObtentionHelper,
  userUpdateHelper,
  userDeleteHelper,
}