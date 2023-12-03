import { Router } from "express";
import { createskillsController, deleteskillsController, obtainskillsController, updateskillsController } from "./controller";

const router: Router = Router();

router.get('/', obtainskillsController);
router.get('/:id', obtainskillsController);
router.post('/', createskillsController);
router.put('/:id', updateskillsController);
router.delete('/:id', deleteskillsController);


export { router };