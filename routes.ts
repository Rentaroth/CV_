import { Router } from "express";
import { user } from "./scr/api/user";
import { experience } from "./scr/api/experience";

const router: Router = Router();

export default (): Router => {
  router.use('/user', user);
  router.use('/experience', experience)
  return router;
};
