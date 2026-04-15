import { Router } from "express";
import {
  getWritingSystems,
  getWritingSystemById,
} from "../../controllers/writingsystem/writingSystemController";

const router = Router();

router.get("/", getWritingSystems);
router.get("/:id", getWritingSystemById);

export default router;
