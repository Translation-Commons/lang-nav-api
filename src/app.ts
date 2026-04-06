import express from "express";

import territoryRoutes from "./routes/territory/territoryRoutes.js";
import extRoutes from "./routes/territory/extRoutes.js";
import curatedRoutes from "./routes/territory/curatedRoutes.js";

const app = express();

app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

app.use("/api/territories", territoryRoutes);
app.use("/api/ext", extRoutes);
app.use("/api/curated", curatedRoutes);

export default app;
