"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTenses } from "@/store/modules/selectedTensesSlice";
import { RootState } from "@/types/typeVerbs";
import { useRouter } from "next/navigation";
import { PagesUrl } from "@/data/urls";
import Tense from "@/data/tense";
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
    dispatch(setSelectedTenses(data));
  };

  const [recomputedTenses, setRecomputedTenses] = useState<string[]>([]);

  const goToNext = () => {
    router.push(PagesUrl.practiseSelected);
  };

  useEffect(() => {
    setRecomputedTenses(Object.values(Tense));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="container lg:mt-6 px-4 pb-24 pt-24 md:pt-0">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center mb-4 text-gray-800">
          Select in which tenses you want to conjugate the verbs
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
