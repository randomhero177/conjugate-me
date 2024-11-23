"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVerb,
  removeVerb,
  setSelectedVerbs,
} from "@/features/selectedVerbsSlice";
import { RootState } from "@/types/typeVerbs";
import { PagesUrl } from "@/data/urls";
import UiChooseList from "@/components/UiChooseList";
import SpanishVerbs from "spanish-verbs";

export default function ChooseTensePage() {
  const SpanishVerbs = require("spanish-verbs");
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleUpdate = (data: string[]) => {
    console.log(data);
    setSelectedOptions(data);
  };

  useEffect(() => {
    console.log(SpanishVerbs);
    console.log(SpanishVerbs.validTenses);
    console.log(SpanishVerbs.getConjugation("hablar", "INDICATIVE_PRESENT", 2));
    console.log(
      SpanishVerbs.getConjugation("abortar", "INDICATIVE_PRETERITE", 5),
    );
  }, []);

  return (
    <div>
      <div>Hello choose tense</div>
      {selectedVerbs.length > 0 && <div>there are some</div>}
      <div>
        <UiChooseList
          options={SpanishVerbs.validTenses}
          selectedOptions={selectedOptions}
          onChange={(data: string[]) => handleUpdate(data)}
        />
      </div>
    </div>
  );
}
