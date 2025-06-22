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
import VerbsPresets from "@/components/VerbsPresets";
import FooterAction from "@/components/FooterAction";
import ChipItem from "@/components/ChipItem";
import ClearAllVerbs from "@/components/ClearAllVerbs";

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
    dispatch(removeVerb(verb));
  };

  const isVerbAdded = (verb: string) => selectedVerbs.includes(verb);

  const goPractice = () => {
    router.push(PagesUrl.tense);
  };

  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 lg:pb-48 pb-32 lg:pb-4">
      <h1 className="text-3xl font-bold mb-12 text-center">
        Select verbs to practice ({Dictionary.length})
      </h1>

      <div className="lg:flex mb-8">
        <div className="group flex-1 flex justify-center bg-white shadow-lg  transition-transform transform hover:scale-105">
          <div className="p-6 flex flex-col items-center">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
              1
            </div>
            <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
              Use text field
            </h2>
            <p className="text-gray-600 text-center">
              You can either search for a specific verb using the input field
            </p>
          </div>
        </div>
        <div className="px-8 text-2xl font-bold text-center my-8 lg:flex items-center">
          or
        </div>

        <div className="group flex-1 flex justify-center bg-white shadow-lg transition-transform transform hover:scale-105">
          <div className="p-6 flex flex-col items-center ">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
              2
            </div>
            <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
              Select a preset
            </h2>
            <p className="text-gray-600 text-center">
              Quickly start practicing by choosing from curated verb sets — like
              most common verbs, regular only, irregular only, or thematic
              groups.
            </p>
          </div>
        </div>
        <div className="px-8 text-2xl font-bold text-center my-8 lg:flex items-center">
          or
        </div>

        <div className="group flex-1 flex justify-center bg-white shadow-lg transition-transform transform hover:scale-105">
          <div className="p-6 flex flex-col items-center ">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
              3
            </div>
            <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
              Find it in the list of all verbs to select
            </h2>
            <p className="text-gray-600 text-center">
              Scroll through the full list below. Click on a verb to select or
              deselect it.
            </p>
          </div>
        </div>
      </div>
      {selectedVerbs.length > 0 && (
        <div className="mb-6 bg-white shadow-lg p-6 pb-4">
          <h2 className="text-xl text-center font-semibold text-gray-700 mb-6">
            Currently selected
          </h2>
          <div className="inline-flex flex-wrap items-center ">
            {selectedVerbs.map((item, index) => (
              <ChipItem
                key={`selectedVerbsMap${index}`}
                callback={removeVerbWrap}
                item={item}
              />
            ))}

            <button
              onClick={() => goPractice()}
              className="ml-4 px-6 py-2 mb-2 bg-green-500 text-white font-bold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
            >
              Next
            </button>
            <ClearAllVerbs />
          </div>
        </div>
      )}
      <div className="mb-8">
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
      <div className="mb-8">
        <VerbsPresets />
      </div>

      <h4 className="mb-4 block text-xl font-medium text-gray-700">
        List of all verbs
      </h4>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(filteredVerbs?.length ? filteredVerbs : Dictionary).map(
          (item, index) => (
            <li
              key={`Dictionary_${index}`}
              className="p-2 lg:p-4 bg-gray-500 shadow-md flex items-center cursor-pointer text-white"
              onClick={() => selectVerb(item)}
            >
              <div>
                <input
                  type="checkbox"
                  checked={selectedVerbs.includes(item)}
                  readOnly
                  className="h-5 w-5 mr-2 text-blue-600 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {item}
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
