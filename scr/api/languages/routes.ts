import { Router } from "express";
import { createLanguagesController, deleteLanguagesController, obtainLanguagesController, updateLanguagesController } from "./controller";

const router: Router = Router();

router.get('/', obtainLanguagesController);
router.get('/:id', obtainLanguagesController);
router.post('/', createLanguagesController);
router.put('/:id', updateLanguagesController);
router.delete('/:id', deleteLanguagesController);


export { router };