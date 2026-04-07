import express from "express";

import territoryRoutes from "./routes/territory/territoryRoutes";
import extRoutes from "./routes/territory/extRoutes";
import curatedRoutes from "./routes/territory/curatedRoutes";

const app = express();

app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

app.get("/api", (req, res) => {
  res.send("API is running");
});

app.use("/api/territories", territoryRoutes);
app.use("/api/ext", extRoutes);
app.use("/api/curated", curatedRoutes);

export default app;
