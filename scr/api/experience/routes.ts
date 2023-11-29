import { Router } from "express";
import { createExperienceController, deleteExperienceController, obtainExperienceController, updateExperienceController } from "./controller";

const router: Router = Router();

router.get('/', obtainExperienceController);
router.get('/:id', obtainExperienceController);
router.post('/', createExperienceController);
router.put('/:id', updateExperienceController);
router.delete('/:id', deleteExperienceController);

export { router };