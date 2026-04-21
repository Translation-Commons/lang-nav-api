import express from "express";
import territoryRoutes from "./routes/territory/territoryRoutes";
import extRoutes from "./routes/territory/extRoutes";
import curatedRoutes from "./routes/territory/curatedRoutes";
import variantRoutes from "./routes/variant/variantRoutes";
import variantExtRoutes from "./routes/variant/variantExtRoutes";
import writingSystemRoutes from "./routes/writingsystem/writingSystemRoutes";
import writingSystemExtRoutes from "./routes/writingsystem/writingSystemExtRoutes";
import curatedWritingSystemRoutes from "./routes/writingsystem/curatedWritingSystemRoutes";
import languageRoutes from "./routes/language/languageRoutes";
import languageExtRoutes from "./routes/language/languageExtRoutes";
import curatedLanguageRoutes from "./routes/language/curatedLanguageRoutes";
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
app.use("/api/ext", extRoutes);
app.use("/api/ext", variantExtRoutes);
app.use("/api/ext", writingSystemExtRoutes);
app.use("/api/ext", languageExtRoutes);
app.use("/api/curated", curatedRoutes);
app.use("/api/curated", curatedWritingSystemRoutes);
app.use("/api/curated", curatedLanguageRoutes);

app.use(errorHandler);

export default app;
