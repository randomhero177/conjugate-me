"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTenses } from "@/features/selectedTensesSlice";
import { RootState } from "@/types/typeVerbs";
import { useRouter } from "next/navigation";
import { PagesUrl } from "@/data/urls";
import UiChooseList from "@/components/UiChooseList";
import FooterAction from "@/components/FooterAction";

export default function ChooseTensePage() {
  const router = useRouter();
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

  const goToNext = () => {
    router.push(PagesUrl.practiseSelected);
  };

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
      <div className="container mt-6 px-4">
        <h1 className="text-2xl font-bold mb-4 text-center my-4">
          Select in which tenses you want to practice verbs
        </h1>
        <div className="py-4">
          <UiChooseList
            options={recomputedTenses}
            selectedOptions={selectedTenses}
            onChange={(data: string[]) => handleUpdate(data)}
          />
        </div>
      </div>
      <FooterAction
        selectedOptions={selectedTenses}
        mainAction={goToNext}
        btnText="Practice"
        emptyText="Choose the tenses in which you want to practice verbs."
      />
    </div>
  );
}
