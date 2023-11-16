import { Router } from "express";
import { greet, createUserController } from "./controller";

const router: Router = Router();

router.get('/', greet);
router.post('/', createUserController)

export { router }