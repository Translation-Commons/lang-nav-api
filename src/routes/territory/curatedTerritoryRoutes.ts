import { Router } from "express";
import { getCuratedTerritories } from "../../controllers/territory/curatedTerritoryController";

const router = Router();

router.get("/territories", getCuratedTerritories);

export default router;
