import express from "express";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import connectDB from "./config/db.js";

const app = express();

await connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;