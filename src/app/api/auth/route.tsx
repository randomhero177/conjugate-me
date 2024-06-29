// src/app/api/login/route.js

import clientPromise from "@/plugins/mongodb";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const client = await clientPromise;
    const db = client.db();

    // Find user by email
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check password (you should hash and compare in a real app)
    if (user.password !== password) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Successful login
    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return new Response(JSON.stringify({ message: "Error logging in" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
