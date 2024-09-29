import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { checkTokenValidity } from "@/services/auth";

const JWT_SECRET = process.env.JWT_SECRET_KEY || "your_jwt_secret";

export async function middleware(req: any) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from headers

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach the decoded user info to the request

    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: "Invalid token" }, { status: 403 });
  }
}

export async function checkToken(token: string) {
  console.log("checkTokenValidity          " + token);

  const data = await checkTokenValidity(token);
  console.log(data);
  const isOk = data.statusText && data.status === 200;
  if (isOk) {
    console.log("Token is valid", data.data.user);
  } else {
    console.log("Token is invalid", data.data.message);
  }

  return isOk ? data.data.user : false;
}
