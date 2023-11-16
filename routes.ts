import { Router } from "express";
import { user } from "./scr";

const router: Router = Router();

export default (): Router => {
  router.use('/user', user);
  return router;
};
