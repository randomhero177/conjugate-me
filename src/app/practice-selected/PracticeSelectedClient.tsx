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
import ClearAllVerbs from "@/components/ClearAllVerbs";
import FooterContact from "@/components/FooterContact";
import { PagesUrl } from "@/data/urls";
import { removeVerb } from "@/store/modules/selectedVerbsSlice";
import { removeTense } from "@/store/modules/selectedTensesSlice";
import { AnswerResults } from "@/types/typeAnswers";
import { getConjugation } from "@/plugins/spanish-verbs";
import * as ga from "@/plugins/ga";

export default function PracticeSelected() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );

  const selectedTenses = useSelector(
    (state: RootState) => state.selectedTenses.selectedTenses,
  );

  const [answerResults, setAnswerResults] = useState<AnswerResults>({
    correct: 0,
    wrong: 0,
  });
  const [currentPronomb, setCurrentPronomb] = useState("");
  const [currentVerb, setCurrentVerb] = useState("");
  const [currentTense, setCurrentTense] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [useSpecialCharacters, setUseSpecialCharacters] = useState(true);

  function getCurrentConjugated() {
    let conjugatedVerb = "";
    console.log(getConjugation);
    if (currentVerb && currentTense) {
      const tenseKey = getKeyByValue(Tense, currentTense);
      conjugatedVerb = getConjugation(
        currentVerb,
        tenseKey,
        Pronomb.indexOf(currentPronomb),
      );
    }

    return conjugatedVerb;
  }

  function randomiseVerbsAndTense(isCorrect: boolean) {
    if (resetKey > 0) {
      updateAnswerResults(isCorrect);
    } else {
      setResetKey((prevKey) => prevKey + 1);
    }

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

  const removeTenseWrap = (tense: string) => {
    dispatch(removeTense(tense));
  };

  const updateAnswerResults = (isCorrect: boolean) => {
    setAnswerResults((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: isCorrect ? prev.wrong : prev.wrong + 1,
    }));

    setResetKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    randomiseVerbsAndTense(false);
    ga.event("load_page", {
      category: "practice_selected",
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 lg:p-12 pt-24 lg:pt-32 pb-44 lg:pb-4">
      {selectedVerbs.length > 0 && selectedTenses.length > 0 && (
        <div className="p-8 bg-white shadow-lg w-full mb-2">
          <div>
            <div className="mb-4">
              <div className="mb-4 text-3xl font-bold text-gray-800 text-center">
                Conjugate this
              </div>
              <div className="text-xl text-gray-800">
                {currentPronomb}{" "}
                <i className="text-gray-800">
                  <b>({currentVerb})</b>
                </i>{" "}
                in {currentTense}
              </div>
            </div>

            <CheckForm
              key={`check_form-${resetKey}`}
              correctAnswer={getCurrentConjugated()}
              goToNext={randomiseVerbsAndTense}
              useSpecialCharacters={useSpecialCharacters}
              setUseSpecialCharacters={setUseSpecialCharacters}
              answerResults={answerResults}
              answerCounter={resetKey}
            ></CheckForm>
          </div>
        </div>
      )}
      <div className="mt-2 flex flex-col gap-4 lg:mb-6 mb-2">
        <div className="flex w-full max-w-xs justify-between rounded-2xl px-6 py-2">
          <div className="text-center px-2">
            <p className="text-sm text-gray-500">✅ Correct</p>
            <p className="text-lg font-semibold text-green-600">
              {answerResults?.correct}
            </p>
          </div>
          <div className="text-center px-2">
            <p className="text-sm text-gray-500">❌ Wrong</p>
            <p className="text-lg font-semibold text-red-500">
              {answerResults?.wrong}
            </p>
          </div>
          <div className="text-center px-2">
            <p className="text-sm text-gray-500">🧮 Total </p>
            <p className="text-lg font-semibold text-blue-500">
              {resetKey ? resetKey - 1 : 0}
            </p>
          </div>
        </div>
      </div>
      {!nothingSelected && (
        <div className="lg:flex mb-8 lg:mb-24">
          <div className="group lg:me-6 mb-6 flex-1">
            <div className="p-6 bg-white shadow-lg">
              {selectedVerbs.length === 0 ? (
                <div>
                  <div className="text-xl text-gray-800">
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
                  <div className="mb-4 text-xl font-bold text-gray-800">
                    Verbs selected to practice:{" "}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {selectedVerbs.map((item, index) => (
                      <ChipItem
                        key={`selectedVerbs_practice_item_${index}`}
                        callback={removeVerbWrap}
                        item={item}
                      />
                    ))}
                    <ClearAllVerbs />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="group lg:ms-6 flex-1">
            <div className="p-6 bg-white shadow-lg">
              {selectedTenses.length === 0 ? (
                <div className="text-xl text-gray-800">
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
                  <div className="mb-4 text-xl font-bold text-gray-800">
                    Tenses selected to practice:{" "}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTenses.map((item, index) => (
                      <ChipItem
                        callback={removeTenseWrap}
                        item={item}
                        key={`selectedTensesPratctice_item_${index}`}
                      />
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
            <div className="p-6 bg-white shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 -mt-32">
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
      <FooterContact />
    </div>
  );
}
