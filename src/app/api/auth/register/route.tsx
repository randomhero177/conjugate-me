import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/util/dbConnect";
import UserModel from "@/models/UserModel";

export async function POST(req: Request) {
  await dbConnect();
  console.log("connected");

  try {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 },
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { email: newUser.email },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 },
    );
  }
}
