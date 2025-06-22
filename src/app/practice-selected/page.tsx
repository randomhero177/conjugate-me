"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckForm from "@/components/CheckForm";
import { RootState } from "@/types/typeVerbs";
import Pronomb from "@/data/pronomb";
import Tense from "@/data/tense";
import { useRouter } from "next/navigation";
import getRandomInRange from "@/util/getRandom";
import getKeyByValue from "@/util/getKeyByValue";
import ChipItem from "@/components/ChipItem";
import { PagesUrl } from "@/data/urls";
import { removeVerb } from "@/features/selectedVerbsSlice";

export default function PracticeSelected() {
  const router = useRouter();
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

  const goToVerbsList = () => {
    router.push(PagesUrl.verbs);
  };

  const goToTensesList = () => {
    router.push(PagesUrl.tense);
  };

  const nothingSelected =
    selectedVerbs.length === 0 && selectedTenses.length === 0;

  const removeVerbWrap = (verb: string) => {
    dispatch(removeVerb(verb));
  };

  /*useEffect(() => {
    randomiseVerbsAndTense();
  }, []);*/

  return (
    <div className="flex min-h-screen flex-col items-center px-4 lg:p-12 ">
      {!nothingSelected && (
        <div className="lg:flex mb-8 lg:mb-24">
          <div className="group lg:me-6 mb-4 flex-1">
            <div className="p-6 bg-white shadow-lg">
              {selectedVerbs.length === 0 ? (
                <div>
                  <div className="text-xl">
                    Good, <b>but not enough!</b> I'll still ask you to choose
                    verbs as well
                    <div className="mt-4">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-beige font-bold shadow-md px-8 py-4 cursor-pointer"
                        onClick={() => goToVerbsList()}
                      >
                        Select verbs
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4 text-xl font-bold">
                    Verbs selected to practice:{" "}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedVerbs.map((item, index) => (
                      /*<span
                        key={`selectedVerbs_item_${item}`}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-500"
                      >
                        {item}
                      </span>*/

                      <ChipItem
                        key={`selectedVerbs_practice_item_${index}`}
                        callback={removeVerbWrap}
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="group lg:ms-6 flex-1">
            <div className="p-6 bg-white shadow-lg">
              {selectedTenses.length === 0 ? (
                <div className="text-xl">
                  Good, <b>but not enough!</b> I'll still ask you to choose the
                  tenses as well
                  <div className="mt-4">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-beige font-bold shadow-md px-8 py-4 cursor-pointer"
                      onClick={() => goToTensesList()}
                    >
                      Select tenses
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4 text-xl font-bold">
                    Tenses selected to practice:{" "}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTenses.map((item) => (
                      <span
                        key={`selectedVerbs_item_${item}`}
                        className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {nothingSelected && (
        <div>
          <div className="group">
            <div className="p-6 bg-white shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Riding too fast, amigo!
              </h2>
              <div className="text-gray-600 text-center">
                To start testing your conjugation skills please select{" "}
                <b>verbs</b> first. <br />
                Then to really to practice you'll have to chose <b>tenses</b> as
                well . <br />
                <br />
                Both steps are mandatories!! You little cheater!
                <div className="mt-4">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-beige font-bold shadow-md px-6 py-2"
                    onClick={() => goToVerbsList()}
                  >
                    Select verbs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedVerbs.length > 0 && selectedTenses.length > 0 && (
        <div className="p-6 bg-white shadow-lg">
          <div>
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
        </div>
      )}
    </div>
  );
}
