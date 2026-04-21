import { Router } from "express";
import { getIanaVariants } from "../../controllers/variant/variantExtController";

const router = Router();

router.get("/iana/variant", getIanaVariants);

export default router;
