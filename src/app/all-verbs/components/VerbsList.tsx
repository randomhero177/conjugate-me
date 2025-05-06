import { useState } from "react";

interface VerbsListProps {
  verbsList: string[];
  onChange: (newSelectedVerbs: string[]) => void; // Define the type of the onChange function
}

export default function VerbsList({ verbsList, onChange }: VerbsListProps) {
  return (
    <ul>
      {verbsList.map((verb) => (
        <li
          key={`verb-list_${verb}`}
          className="p-4 bg-gray-200 shadow-md flex items-center"
        >
          {verb}
        </li>
      ))}
    </ul>
  );
}
