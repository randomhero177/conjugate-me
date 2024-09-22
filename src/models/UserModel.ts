// src/models/User.js

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  },
);

// This ensures the model is not created again on each module reload in development
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
