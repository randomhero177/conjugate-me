"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVerb,
  removeVerb,
  setSelectedVerbs,
} from "@/store/modules/selectedVerbsSlice";
import ChooseStepsDescription from "@/app/all-verbs/components/ChooseStepsDescription";
import UiCombobox from "@/components/UiCombobox";
import Dictionary from "@/data/dictionaryNoReflexiv";
import { useRouter } from "next/navigation";
import { RootState } from "@/types/typeVerbs";
import { PagesUrl } from "@/data/urls";
import VerbsPresets from "@/components/VerbsPresets";
import FooterAction from "@/components/FooterAction";
import ChipItem from "@/components/ChipItem";
import ClearAllVerbs from "@/components/ClearAllVerbs";
import * as ga from "@/plugins/ga";

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
      ga.event("chose_verbs", {
        category: "via_full_list",
        label: "select verb",
        attempted_verb: verb,
      });
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
    <main className="flex min-h-screen flex-col items-center lg:p-24 lg:pt-32 lg:pb-48 pb-32 pt-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-12 text-center text-gray-800 pt-12 md:pt-0">
        Select verbs to practice ({Dictionary.length})
      </h1>
      <ChooseStepsDescription />
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
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
