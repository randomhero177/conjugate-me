import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/plugins/mongodb";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    return NextResponse.json({ message: "Error logging in" }, { status: 500 });
  }
}
