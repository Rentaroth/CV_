import { Portfolio } from "../../config/ts_types";
import { PortfolioEntity } from "./entity";

async function createPortfolioHelper(data: Portfolio) {
  const info = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const entity = new PortfolioEntity(info);
  try {
    const result = await entity.portfolioCreationMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function obtainPortfolioHelper(id: string) {
  const entity = new PortfolioEntity({ id });
  try {
    const result = await entity.portfolioObtainMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function updatePortfolioHelper(id: string, data: Portfolio) {
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new PortfolioEntity(info);
  try {
    const result = await entity.portfolioUpdateMethod();
    return result;
  } catch (error) {
    console.error(error)
  }
}

async function deletePortfolioHelper(id: string) {
  const entity = new PortfolioEntity({ id });
  try {
    const result = await entity.portfolioDeleteMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export {
  createPortfolioHelper,
  obtainPortfolioHelper,
  updatePortfolioHelper,
  deletePortfolioHelper,
}