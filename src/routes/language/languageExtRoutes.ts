import { Router } from "express";
import {
  getGlottologLanguages,
  getGlottologManualIsoLinks,
  getIso6393,
  getMacrolanguages,
  getFamilies6395,
  getLanguageNamesFrench,
  getFamiliesToLanguages,
  getIsoRetirements,
  getEthnologue2012,
  getEthnologue2025,
} from "../../controllers/language/languageExtController";

const router = Router();

router.get("/glottolog/languages", getGlottologLanguages);
router.get("/glottolog/manual-iso-links", getGlottologManualIsoLinks);
router.get("/iso/iso-639-3", getIso6393);
router.get("/tc/language-names-french", getLanguageNamesFrench);
router.get("/iso/macrolanguages", getMacrolanguages);
router.get("/iso/families", getFamilies6395);
router.get("/iso/family-language-links", getFamiliesToLanguages);
router.get("/iso/retirements", getIsoRetirements);
router.get("/ethnologue/2012", getEthnologue2012);
router.get("/ethnologue/2025", getEthnologue2025);

export default router;
