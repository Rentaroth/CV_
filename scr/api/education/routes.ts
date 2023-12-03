import { Router } from "express";
import { createEducationController, deleteEducationController, obtainEducationController, updateEducationController } from "./controller";

const router = Router();

router.get('/', obtainEducationController);
router.get('/:id', obtainEducationController);
router.post('/', createEducationController);
router.put('/:id', updateEducationController);
router.delete('/:id', deleteEducationController);

export { router }
