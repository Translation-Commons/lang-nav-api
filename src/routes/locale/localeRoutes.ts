import { Router } from "express";
import {
  getLocales,
  getLocaleById,
} from "../../controllers/locale/localeController";

const router = Router();

router.get("/", getLocales);
router.get("/:id", getLocaleById);

export default router;
