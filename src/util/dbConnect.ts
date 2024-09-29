import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let isConnected = false; // Track connection state

export default async function dbConnect() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected successfully");
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
