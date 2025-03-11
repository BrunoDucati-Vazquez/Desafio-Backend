import express from "express";
import toolRoutes from "../src/routes/toolRoutes.js"
const app = express();

app.use(express.json())

// Use the /tools routes
app.use('/tools', toolRoutes);

export default app;