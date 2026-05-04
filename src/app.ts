import express from "express";
import territoryRoutes from "./routes/territory/territoryRoutes";
import territoryExtRoutes from "./routes/territory/TerritoryExtRoutes";
import curatedTerritoryRoutes from "./routes/territory/curatedTerritoryRoutes";
import variantRoutes from "./routes/variant/variantRoutes";
import variantExtRoutes from "./routes/variant/variantExtRoutes";
import writingSystemRoutes from "./routes/writingsystem/writingSystemRoutes";
import writingSystemExtRoutes from "./routes/writingsystem/writingSystemExtRoutes";
import curatedWritingSystemRoutes from "./routes/writingsystem/curatedWritingSystemRoutes";
import languageRoutes from "./routes/language/languageRoutes";
import languageExtRoutes from "./routes/language/languageExtRoutes";
import curatedLanguageRoutes from "./routes/language/curatedLanguageRoutes";
import localeRoutes from "./routes/locale/localeRoutes";
import curatedLocaleRoutes from "./routes/locale/curatedLocaleRoutes";
import censusRoutes from "./routes/census/censusRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

app.use("/api/territories", territoryRoutes);
app.use("/api/variant", variantRoutes);
app.use("/api/writingsystems", writingSystemRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/locales", localeRoutes);
app.use("/api/censuses", censusRoutes);
app.use("/api/ext", territoryExtRoutes);
app.use("/api/ext", variantExtRoutes);
app.use("/api/ext", writingSystemExtRoutes);
app.use("/api/ext", languageExtRoutes);
app.use("/api/curated", curatedTerritoryRoutes);
app.use("/api/curated", curatedWritingSystemRoutes);
app.use("/api/curated", curatedLanguageRoutes);
app.use("/api/curated", curatedLocaleRoutes);

app.use(errorHandler);

export default app;
