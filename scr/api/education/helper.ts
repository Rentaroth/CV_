import { Education } from "../../config/ts_types";
import { EducationEntity } from "./entity";

async function educationCreationHelper(data: Education) {
  const info = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const entity = new EducationEntity(info);
  try {
    const result = await entity.educationCreationMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function educationObtentionHelper(id: string) {
  const entity = new EducationEntity({ id });
  try {
    const result = await entity.educationObtainMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function educationUpdateHelper(data: Education, id: string) {
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new EducationEntity(info);
  try {
    const result = await entity.educationUpdateMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function educationDeleteHelper(id: string) {
  const entity = new EducationEntity({ id });
  try {
    const result = await entity.educationDeleteMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export {
  educationCreationHelper,
  educationObtentionHelper,
  educationUpdateHelper,
  educationDeleteHelper,
}