import { Router } from "express";
import { createUserController, deleteUserController, obtainUserController, updateUserController } from "./controller";

const router: Router = Router();

router.get('/', obtainUserController);
router.get('/:id', obtainUserController);
router.post('/', createUserController);
router.put('/', updateUserController);
router.delete('/', deleteUserController);


export { router }