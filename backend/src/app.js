import express from "express";
import toolRoutes from "../src/routes/toolRoutes.js"
const app = express();

app.use(express.json())
app.use("/tools", toolRoutes);

export default app;