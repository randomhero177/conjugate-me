"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTenses } from "@/store/modules/selectedTensesSlice";
import { RootState } from "@/types/typeVerbs";
import { useRouter } from "next/navigation";
import { PagesUrl } from "@/data/urls";
import {
  TensesList,
  IndicativeTensesList,
  SubjuntiveTensesList,
  ConditionalTensesList,
} from "@/data/tense";
import UiChooseList from "@/components/UiChooseList";
import FooterAction from "@/components/FooterAction";
import * as ga from "@/plugins/ga";
export default function ChooseTensePage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedTenses = useSelector(
    (state: RootState) => state.selectedTenses.selectedTenses,
  );

  const handleUpdate = (data: string[]) => {
    ga.event("chose_tense", {
      category: "via_full_list",
      label: "select tense",
      attempted_verb: data,
    });
    dispatch(setSelectedTenses(data));
  };

  const goToNext = () => {
    router.push(PagesUrl.practiseSelected);
  };

  useEffect(() => {
    ga.event("load_page", {
      category: "choose_tense",
    });
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-6 py-10 space-y-10 pt-32 pb-32">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center mb-4 text-gray-800">
        Select in which tenses you want to conjugate the verbs
      </h1>
      <div className="bg-white shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Indicative</h2>

        <div className="py-2">
          <UiChooseList
            options={Object.values(IndicativeTensesList)}
            selectedOptions={selectedTenses}
            onChange={(data: string[]) => handleUpdate(data)}
          />
        </div>
      </div>

      {/* Subjuntive */}
      <div className="bg-white shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Subjuntive</h2>

        <div className="py-2">
          <UiChooseList
            options={Object.values(SubjuntiveTensesList)}
            selectedOptions={selectedTenses}
            onChange={(data: string[]) => handleUpdate(data)}
          />
        </div>
      </div>

      {/* Conditional */}
      <div className="bg-white shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Conditional
        </h2>

        <div className="py-2">
          <UiChooseList
            options={Object.values(ConditionalTensesList)}
            selectedOptions={selectedTenses}
            onChange={(data: string[]) => handleUpdate(data)}
          />
        </div>
      </div>

      <div className="pt-4">
        <FooterAction
          selectedOptions={selectedTenses}
          mainAction={goToNext}
          btnText="Practice"
          emptyText="Choose the tenses in which you want to practice verbs."
        />
      </div>
    </div>
  );
}
