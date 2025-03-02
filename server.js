import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoutes from "./routes/authRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true, // Required for cookies
  })
);

// Connect to Database
connectDB();

// API endpoint
app.get("/", (req, res) => {
  res.send("API is working.");
});

// Auth API
app.use("/api/auth", authRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
