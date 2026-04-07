import { Router } from "express";
import { getCuratedTerritories } from "../../controllers/territory/curatedController";

const router = Router();

router.get("/territories", getCuratedTerritories);

export default router;
