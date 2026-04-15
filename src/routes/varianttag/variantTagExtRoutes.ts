import { Router } from "express";
import { getIanaVariants } from "../../controllers/varianttag/variantTagExtController";

const router = Router();

router.get("/iana/variant-tags", getIanaVariants);

export default router;
