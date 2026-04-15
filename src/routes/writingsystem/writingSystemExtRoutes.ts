import { Router } from "express";
import { getCldrCoverage } from "../../controllers/writingsystem/writingSystemExtController";

const router = Router();

router.get("/unicode/cldr-coverage", getCldrCoverage);

export default router;
