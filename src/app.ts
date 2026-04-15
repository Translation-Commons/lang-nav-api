import express from "express";
import territoryRoutes from "./routes/territory/territoryRoutes";
import extRoutes from "./routes/territory/extRoutes";
import curatedRoutes from "./routes/territory/curatedRoutes";
import variantTagRoutes from "./routes/varianttag/variantTagRoutes";
import variantTagExtRoutes from "./routes/varianttag/variantTagExtRoutes";
import writingSystemRoutes from "./routes/writingsystem/writingSystemRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

app.use("/api/territories", territoryRoutes);
app.use("/api/varianttags", variantTagRoutes);
app.use("/api/writingsystems", writingSystemRoutes);
app.use("/api/ext", extRoutes);
app.use("/api/ext", variantTagExtRoutes);
app.use("/api/curated", curatedRoutes);

app.use(errorHandler);

export default app;
