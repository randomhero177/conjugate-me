// src/app/all-verbs/page.tsx
"use client";
import { useEffect, useState } from "react";
import UiCombobox from "@/components/UiCombobox";

export default function Page() {
  const [connectionStatus, setConnectionStatus] = useState("");
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const vegetables = ["Carrot", "Broccoli", "Spinach", "Peas"];

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
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        asdasd - {connectionStatus}
      </div>
      <div className="flex justify-between">
        <div>
          <UiCombobox
            options={fruits}
            label="Select multiple fruits"
            isMultiple={true}
            onChange={setSelectedFruits}
          />
          <div className="mt-2">
            Selected Fruits: {selectedFruits.join(", ")}
          </div>
        </div>

        <div>
          <UiCombobox
            options={vegetables}
            label="Select a vegetable"
            isMultiple={false}
            onChange={setSelectedVegetable}
          />
          <div className="mt-2">Selected Vegetable: {selectedVegetable}</div>
        </div>
      </div>
    </main>
  );
}
