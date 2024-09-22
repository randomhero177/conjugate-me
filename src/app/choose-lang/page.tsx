// src/app/all-verbs/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [connectionStatus, setConnectionStatus] = useState("");

  useEffect(() => {
    const checkMongoDBConnection = async () => {
      try {
        const response = await fetch("/api/test-connection");
        const data = await response.json();
        setConnectionStatus(data.message);
      } catch (error) {
        console.error("Error checking MongoDB connection:", error);
        setConnectionStatus("Error connecting to MongoDB");
      }
    };

    checkMongoDBConnection();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        asdasd - {connectionStatus}
      </div>
    </main>
  );
}
