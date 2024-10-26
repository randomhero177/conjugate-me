"use client";
/*import SpanishVerbs from "spanish-verbs";*/
import { useState, useEffect, useRef } from "react";
import Dictionary from "@/data/dictionary";

export default function Page() {
  const [selectedVerbs, setSelectedVerbs] = useState([""]);

  useEffect(() => {
    const SpanishVerbs = require("spanish-verbs");
    console.log(SpanishVerbs);
    console.log(SpanishVerbs.validTenses);
    console.log(SpanishVerbs.getConjugation("hablar", "INDICATIVE_PRESENT", 2));
    console.log(SpanishVerbs.getConjugation("huir", "INDICATIVE_PRETERITE", 5));
    console.log(SpanishVerbs.allInfinitives);
  }, []);

  const selectVerb = (verb) => {
    console.log(verb);
    setSelectedVerbs((prevSelectedVerbs) => [...prevSelectedVerbs, verb]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-4">
        Select verbs ({Dictionary.length})
      </h1>
      <div className="mb-6">
        {selectedVerbs.map((item, index) => (
          <span key={`selectedVerbsMap${index}`}> {item} </span>
        ))}
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {Dictionary.map((item, index) => (
          <li
            key={`Dictionary_${index}`}
            className="p-4 bg-gray-200 rounded-lg shadow-md"
            onClick={() => selectVerb(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </main>
  );
}
