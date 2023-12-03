import { Router } from "express";
import { user } from "./scr/api/user";
import { experience } from "./scr/api/experience";
import { education } from "./scr/api/education";

const router: Router = Router();

export default (): Router => {
  router.use('/user', user);
  router.use('/experience', experience);
  router.use('/education', education);
  return router;
};
