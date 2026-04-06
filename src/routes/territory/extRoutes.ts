import { Router } from "express";
import {
  getCountryCoords,
  getTerritoryGdpLiteracy,
} from "../../controllers/territory/territoryExtController.js";

const router = Router();

router.get("/geo/country-coord", getCountryCoords);
router.get("/un/territory-gdp-literacy", getTerritoryGdpLiteracy);

export default router;
