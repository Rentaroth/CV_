import { Router } from "express";
import { user } from "./scr/api/user";
import { experience } from "./scr/api/experience";
import { education } from "./scr/api/education";
import { skills } from "./scr/api/skills";
import { softSkills } from "./scr/api/softSkills";
import { languages } from "./scr/api/languages";

const router: Router = Router();

export default (): Router => {
  router.use('/user', user);
  router.use('/experience', experience);
  router.use('/education', education);
  router.use('/skills', skills);
  router.use('/softSkills', softSkills);
  router.use('/languages', languages);
  return router;
};
