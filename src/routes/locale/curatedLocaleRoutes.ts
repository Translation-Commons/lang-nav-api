import { Router } from "express";
import { getCuratedLocales } from "../../controllers/locale/curatedLocaleController";

const router = Router();

router.get("/locales", getCuratedLocales);

export default router;
