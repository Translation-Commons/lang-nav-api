import { Router } from "express";
import {
  getVariant,
  getVariantById,
} from "../../controllers/variant/variantController";

const router = Router();

router.get("/", getVariant);
router.get("/:id", getVariantById);

export default router;
