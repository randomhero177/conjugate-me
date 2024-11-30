"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTenses } from "@/features/selectedTensesSlice";
import { RootState } from "@/types/typeVerbs";
import { PagesUrl } from "@/data/urls";
import UiChooseList from "@/components/UiChooseList";

export default function ChooseTensePage() {
  const SpanishVerbs = require("spanish-verbs");
  const dispatch = useDispatch();
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );

  const selectedTenses = useSelector(
    (state: RootState) => state.selectedTenses.selectedTenses,
  );

  const handleUpdate = (data: string[]) => {
    console.log(data);
    dispatch(setSelectedTenses(data));
  };

  const [recomputedTenses, setRecomputedTenses] = useState<string[]>([]);

  useEffect(() => {
    console.log(SpanishVerbs);
    console.log(SpanishVerbs.validTenses);
    console.log(SpanishVerbs.getConjugation("hablar", "INDICATIVE_PRESENT", 2));
    console.log(
      SpanishVerbs.getConjugation("abortar", "INDICATIVE_PRETERITE", 5),
    );
    setRecomputedTenses(
      SpanishVerbs.validTenses.map((tense: string) =>
        tense.replaceAll("_", " "),
      ),
    );
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container">
        <div>Hello choose tense</div>
        {selectedVerbs.length > 0 && <div>there are some</div>}
        <div>
          <UiChooseList
            options={recomputedTenses}
            selectedOptions={selectedTenses}
            onChange={(data: string[]) => handleUpdate(data)}
          />
        </div>
      </div>
    </div>
  );
}
