import { Router } from "express";
import {
  getTerritoryById,
  getTerritories,
} from "../../controllers/territory/territoryController.js";

const router = Router();

router.get("/", getTerritories);
router.get("/:id", getTerritoryById);

export default router;
