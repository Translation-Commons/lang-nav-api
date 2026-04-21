import { Router } from "express";
import {
  getLanguages,
  getLanguageById,
} from "../../controllers/language/languageController";

const router = Router();

router.get("/", getLanguages);
router.get("/:id", getLanguageById);

export default router;
