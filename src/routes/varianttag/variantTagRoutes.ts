import { Router } from "express";
import {
  getVariantTags,
  getVariantTagById,
} from "../../controllers/varianttag/variantTagController";

const router = Router();

router.get("/", getVariantTags);
router.get("/:id", getVariantTagById);

export default router;
