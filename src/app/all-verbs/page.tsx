"use client";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVerb,
  removeVerb,
  setSelectedVerbs,
} from "@/features/selectedVerbsSlice";
import UiCombobox from "@/components/UiCombobox";
import Dictionary from "@/data/dictionary";
import { useRouter } from "next/navigation";
import { RootState } from "@/types/typeVerbs";
import { PagesUrl } from "@/data/urls";

export default function Page() {
  const router = useRouter();
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );
  const [filteredVerbs, setFilteredVerbs] = useState<string[]>([]);
  const isVerbSelected = useMemo(
    () => selectedVerbs.length > 0,
    [selectedVerbs],
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const SpanishVerbs = require("spanish-verbs");
    console.log(SpanishVerbs);
    console.log(SpanishVerbs.validTenses);
    console.log(SpanishVerbs.getConjugation("hablar", "INDICATIVE_PRESENT", 2));
    console.log(SpanishVerbs.getConjugation("huir", "INDICATIVE_PRETERITE", 5));
    console.log(SpanishVerbs.allInfinitives);
  }, []);

  const selectVerb = (verb: string) => {
    console.log(verb);
    if (!isVerbAdded(verb)) {
      dispatch(addVerb(verb));
    } else {
      removeVerbWrap(verb);
    }
  };

  const removeVerbWrap = (verb: string) => {
    console.log(verb);
    dispatch(removeVerb(verb));
  };

  const isVerbAdded = (verb: string) => selectedVerbs.includes(verb);

  const goPractice = () => {
    router.push(PagesUrl.tense);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-4">
        Select verbs for practics ({Dictionary.length})
      </h1>
      <div className="mb-6 inline-flex flex-wrap items-center">
        {selectedVerbs.map((item, index) => (
          <span
            key={`selectedVerbsMap${index}`}
            className="flex items-center me-2 mb-2 px-2 py-1 text-lg font-semibold text-indigo-700 bg-indigo-100 rounded"
          >
            {item}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-1 cursor-pointer"
              onClick={() => removeVerbWrap(item)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          </span>
        ))}

        {selectedVerbs.length > 0 && (
          <button
            onClick={() => goPractice()}
            className="ml-4 px-6 py-2 mb-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
          >
            Practice
          </button>
        )}
      </div>

      <div className="mb-16">
        <div className="lg:min-w-[540px]">
          <UiCombobox
            options={Dictionary}
            isMultiple={true}
            showSelectedChips={false}
            minSearchLength={2}
            updateFilteredOptions={setFilteredVerbs}
            onChange={(verbs: string[]) => dispatch(setSelectedVerbs(verbs))} // Update selected verbs
            selectedOptions={selectedVerbs} // Pass the current selected verbs
          />
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(filteredVerbs?.length ? filteredVerbs : Dictionary).map(
          (item, index) => (
            <li
              key={`Dictionary_${index}`}
              className="p-4 bg-gray-200 rounded-lg shadow-md flex items-center cursor-pointer"
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
        {selectedVerbs.length ? (
          <button
            onClick={() => goPractice()}
            className="ml-4 px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
          >
            Practice
          </button>
        ) : (
          <div>Choose verbs you would like to practice</div>
        )}
      </div>
    </main>
  );
}
