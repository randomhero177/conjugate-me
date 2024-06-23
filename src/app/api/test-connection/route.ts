// src/app/api/test-connection/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/plugins/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("admin");

    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    return NextResponse.json({
      message: "Pinged your deployment. You successfully connected to MongoDB!",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Unable to connect to MongoDB" },
      { status: 500 },
    );
  }
}
