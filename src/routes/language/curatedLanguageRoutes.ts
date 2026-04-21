import { Router } from "express";
import { getCuratedLanguages } from "../../controllers/language/curatedLanguageController";

const router = Router();

router.get("/languages", getCuratedLanguages);

export default router;
