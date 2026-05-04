import { Router } from "express";
import {
  getCensuses,
  getCensusById,
} from "../../controllers/census/censusController";

const router = Router();

router.get("/", getCensuses);
router.get("/:id", getCensusById);

export default router;
