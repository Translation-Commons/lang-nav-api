import { Router } from "express";
import { getCuratedWritingSystems } from "../../controllers/writingsystem/curatedWritingSystemController";

const router = Router();

router.get("/writingsystems", getCuratedWritingSystems);

export default router;
