import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "test ") {
        mongoUri = "mongodb://127.0.0.1:27017/taskmanager_test";
      } else {
        throw new Error(
          "MONGO_URI is not defined. Add MONGO_URI to your .env file (e.g. mongodb://localhost:27017/taskmanager)"
        );
      }
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

export default connectDB;