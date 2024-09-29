import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const secretKey = process.env.JWT_SECRET_KEY;

  // Extract the token from the 'Authorization' header
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Authorization token is missing or invalid" },
      { status: 401 },
    );
  }

  const token = authHeader.split(" ")[1]; // Extract the token from 'Bearer <token>'

  try {
    // Verify the token with the secret key
    const decoded = jwt.verify(token, secretKey);

    // Respond with success if token is valid
    return NextResponse.json(
      { message: "Token is valid", user: decoded },
      { status: 200 },
    );
  } catch (error) {
    // Respond with an error if token verification fails
    return NextResponse.json(
      { message: "Invalid or expired token", error: error.message },
      { status: 401 },
    );
  }
}
