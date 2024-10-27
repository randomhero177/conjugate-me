"use client";
/*import SpanishVerbs from "spanish-verbs";*/
import { useState, useEffect, useRef, useMemo } from "react";
import UiCombobox from "@/components/UiCombobox";
import Dictionary from "@/data/dictionary";

export default function Page() {
  const [selectedVerbs, setSelectedVerbs] = useState([]);
  const [filteredVerbs, setFilteredVerbs] = useState([]);
  const isVerbSelected = useMemo(
    () => selectedVerbs.length > 0,
    [selectedVerbs],
  );

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
    if (!isVerbAdded(verb)) {
      setSelectedVerbs((prevSelectedVerbs) => [...prevSelectedVerbs, verb]);
    }
  };
  const removeVerb = (verb) => {
    console.log(verb);
    setSelectedVerbs((prevSelectedVerbs) =>
      prevSelectedVerbs.filter((item) => item !== verb),
    );
  };

  const isVerbAdded = (verb) => selectedVerbs.includes(verb);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-4">
        Select verbs ({Dictionary.length})
      </h1>
      <div className="mb-6">
        {selectedVerbs.map((item, index) => (
          <span key={`selectedVerbsMap${index}`} className="flex items-center">
            {" "}
            {item}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-1"
              onClick={() => removeVerb(item)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          </span>
        ))}
      </div>
      <div className="mb-16">
        <div className="lg:min-w-[540px]">
          <UiCombobox
            options={Dictionary}
            isMultiple={true}
            minSearchLength={2}
            updateFilteredOptions={setFilteredVerbs}
            preselectedOptions={["trabajar", "ir"]}
          />
        </div>
      </div>
      <ul className="grid grid-cols-6 gap-4">
        {(filteredVerbs?.length ? filteredVerbs : Dictionary).map(
          (item, index) => (
            <li
              key={`Dictionary_${index}`}
              className="p-4 bg-gray-200 rounded-lg shadow-md flex items-center"
              onClick={() => selectVerb(item)}
            >
              {item}
              {isVerbAdded(item) && (
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </span>
              )}
            </li>
          ),
        )}
      </ul>
      <div className="fixed bottom-0 left-0 w-full bg-blue-500 text-white p-4 text-center text-lg">
        Choose verbs you would like to practice
      </div>
    </main>
  );
}
