"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVerb,
  removeVerb,
  setSelectedVerbs,
} from "@/features/selectedVerbsSlice";
import UiCombobox from "@/components/UiCombobox";
import Dictionary from "@/data/dictionaryNoReflexiv";
import { useRouter } from "next/navigation";
import { RootState } from "@/types/typeVerbs";
import { PagesUrl } from "@/data/urls";
import FooterAction from "@/components/FooterAction";

export default function AllVerbsPage() {
  const router = useRouter();
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );
  const [filteredVerbs, setFilteredVerbs] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const SpanishVerbs = require("spanish-verbs");
    console.log(SpanishVerbs.validTenses);
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
    <main className="flex min-h-screen flex-col items-center lg:p-24 pb-32 lg:pb-4">
      <h1 className="text-3xl font-bold mb-12 text-center">
        Select verbs to practice ({Dictionary.length})
      </h1>

      <div className="lg:flex items-center">
        <div className="group">
          <div className="p-6 bg-white shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
              1
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Use text field
            </h2>
            <p className="text-gray-600 text-center">
              You can either search for a specific verb using the input field
            </p>
          </div>
        </div>
        <div className="px-8 text-2xl font-bold text-center my-8">or</div>

        <div className="group">
          <div className="p-6 bg-white shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
              2
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Find it in the list of all verbs to select
            </h2>
            <p className="text-gray-600 text-center">
              Scroll through the full list below. Click on a verb to select or
              deselect it.
            </p>
          </div>
        </div>
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
            label="Find a verb by query"
          />
        </div>
      </div>
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
            className="ml-4 px-6 py-2 mb-2 bg-green-500 text-white font-bold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
          >
            Next
          </button>
        )}
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(filteredVerbs?.length ? filteredVerbs : Dictionary).map(
          (item, index) => (
            <li
              key={`Dictionary_${index}`}
              className="p-4 bg-gray-500 shadow-md flex items-center cursor-pointer text-white"
              onClick={() => selectVerb(item)}
            >
              <input
                type="checkbox"
                checked={selectedVerbs.includes(item)}
                readOnly
                className="h-5 w-5 mr-2 text-blue-600 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              {item}
              {/*{isVerbAdded(item) && (
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
              )}*/}
            </li>
          ),
        )}
      </ul>
      <FooterAction
        selectedOptions={selectedVerbs}
        emptyText="Choose verbs you would like to practice"
        btnText="Next"
        mainAction={goPractice}
      />
    </main>
  );
}
