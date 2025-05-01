"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckForm from "@/components/CheckForm";
import { RootState } from "@/types/typeVerbs";
import Pronomb from "@/data/pronomb";
import Tense from "@/data/tense";
import getRandomInRange from "@/util/getRandom";
import getKeyByValue from "@/util/getKeyByValue";

export default function PracticeSelected() {
  const SpanishVerbs = require("spanish-verbs");
  const dispatch = useDispatch();
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );

  const selectedTenses = useSelector(
    (state: RootState) => state.selectedTenses.selectedTenses,
  );

  const [currentPronomb, setCurrentPronomb] = useState("");
  const [currentVerb, setCurrentVerb] = useState("");
  const [currentTense, setCurrentTense] = useState("");
  const [resetKey, setResetKey] = useState(0);

  function getCurrentConjugated() {
    console.log(currentPronomb);
    let conjugatedVerb = "";
    if (currentVerb && currentTense) {
      const tenseKey = getKeyByValue(Tense, currentTense);
      conjugatedVerb = SpanishVerbs.getConjugation(
        currentVerb,
        tenseKey,
        Pronomb.indexOf(currentPronomb),
      );
    }

    console.log(conjugatedVerb);
    return conjugatedVerb;
  }

  function randomiseVerbsAndTense() {
    setResetKey((prevKey) => prevKey + 1);
    setCurrentVerb(
      selectedVerbs.length > 1
        ? selectedVerbs[getRandomInRange(0, selectedVerbs.length - 1)]
        : selectedVerbs[0],
    );
    setCurrentTense(
      selectedTenses.length > 1
        ? selectedTenses[getRandomInRange(0, selectedTenses.length - 1)]
        : selectedTenses[0],
    );
    setCurrentPronomb(Pronomb[getRandomInRange(0, 5)]);
  }

  useEffect(() => {
    randomiseVerbsAndTense();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-24">
        <div className="mb-4 text-center">Verbs selected to practice: </div>
        <div className="flex flex-wrap gap-2">
          {selectedVerbs.map((item) => (
            <span
              key={`selectedVerbs_item_${item}`}
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-500 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-4 text-3xl font-bold text-gray-800 text-center">
          Conjugate this
        </div>
        <div className="text-xl">
          {currentPronomb}{" "}
          <i>
            <b>({currentVerb})</b>
          </i>{" "}
          in {currentTense}
        </div>
      </div>

      <CheckForm
        key={resetKey}
        correctAnswer={getCurrentConjugated()}
        goToNext={randomiseVerbsAndTense}
      ></CheckForm>
    </div>
  );
}
