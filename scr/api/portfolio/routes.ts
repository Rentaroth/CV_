import { Router } from "express";
import { createPortfolioController, deletePortfolioController, obtainPortfolioController, updatePortfolioController } from "./controller";

const router: Router = Router();

router.get('/', obtainPortfolioController);
router.get('/:id', obtainPortfolioController);
router.post('/', createPortfolioController);
router.put('/:id', updatePortfolioController);
router.delete('/:id', deletePortfolioController);


export { router };