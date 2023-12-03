import { Router } from "express";
import { createSoftSkillsController, deleteSoftSkillsController, obtainSoftSkillsController, updateSoftSkillsController } from "./controller";

const router: Router = Router();

router.get('/', obtainSoftSkillsController);
router.get('/:id', obtainSoftSkillsController);
router.post('/', createSoftSkillsController);
router.put('/:id', updateSoftSkillsController);
router.delete('/:id', deleteSoftSkillsController);


export { router };