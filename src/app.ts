import express from "express";

import territoryRoutes from "./routes/territory/territoryRoutes";
import extRoutes from "./routes/territory/extRoutes";
import curatedRoutes from "./routes/territory/curatedRoutes";

const app = express();

app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/territories", territoryRoutes);
app.use("/ext", extRoutes);
app.use("/curated", curatedRoutes);

export default app;
