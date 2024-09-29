import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnect from "@/util/dbConnect";
import UserModel from "@/models/UserModel";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Use an environment variable

export async function POST(req: Request) {
  await dbConnect();
  console.log("connected to DB");

  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Check if password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Generate a JWT token, valid for 30 days
    const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
      expiresIn: "30d", // Token expires in 30 days
    });

    return NextResponse.json(
      {
        message: "Login successful",
        token, // Send the token to the client
        user: { email: user.email },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 },
    );
  }
}
