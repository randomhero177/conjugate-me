import { useState, useEffect, useRef } from "react";
import { AnswerResults } from "@/types/typeAnswers";
interface Props {
  correctAnswer: string;
  goToNext: (isCorrect: boolean) => void;
  useSpecialCharacters: boolean;
  setUseSpecialCharacters: React.Dispatch<React.SetStateAction<boolean>>;
  answerResults?: AnswerResults;
  answerCounter?: number;
}

const CheckForm = ({
  correctAnswer = "",
  goToNext,
  useSpecialCharacters = true,
  setUseSpecialCharacters,
  answerResults,
  answerCounter,
}: Props) => {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wantTooSee, setWantTooSee] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function checkResult() {
    if (isCorrect) {
      goToNext(true);
    }
    const localQuery = useSpecialCharacters
      ? removeAccents(query.toLowerCase())
      : query.toLowerCase();
    const localAnswer = useSpecialCharacters
      ? removeAccents(correctAnswer.toLowerCase())
      : correctAnswer.toLowerCase();
    setShowResult(true);
    setIsCorrect(localQuery.trim() === localAnswer.trim());
  }

  useEffect(() => {
    console.log("+");
    console.log(answerResults);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex items-start">
      <div className="grow">
        <div className="mb-4">
          <input
            type="text"
            className="px-4 py-2 mt-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 check-form__input md:mr-4 text-gray-800"
            placeholder="Conjugated verb"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkResult();
              }
            }}
            autoComplete="off"
            ref={inputRef}
          />
          <button
            onClick={() => checkResult()}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 focus:outline-none focus:shadow-outline"
          >
            Check answer
          </button>

          <button
            className={`lg:hidden mt-2 float-right ml-4 px-6 py-2 text-white font-bold shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition
                ${isCorrect ? "bg-cyan-600 hover:bg-cyan-600 " : "bg-yellow-700 hover:bg-yellow-800"}
                `}
            onClick={() => goToNext(isCorrect)}
          >
            {isCorrect ? "Next" : "Skip"}
          </button>
        </div>
        {showResult && (
          <div className="lg:flex align-middle items-center">
            {isCorrect ? (
              <>
                <span className="text-green-500">&#x2714;</span>{" "}
                <span className="font-bold text-green-500">You're right!</span>
              </>
            ) : (
              <>
                <span className="text-red-500">&#x2716;</span>{" "}
                <span className="font-bold text-red-500">Try again!</span>
              </>
            )}
            <div className="lg:flex ms-4 text-gray-800">
              {!isCorrect && wantTooSee && (
                <div>
                  The correct answer is <b>{correctAnswer}</b>
                </div>
              )}
              {!isCorrect && !wantTooSee && (
                <div
                  className="underline cursor-pointer italic text-gray-800"
                  onClick={() => setWantTooSee(true)}
                >
                  Show correct answer
                </div>
              )}
            </div>
            <div className="mt-4 lg:mt-0 hidden lg:block">
              <button
                className={`ml-4 px-6 py-2 text-white font-bold shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition
                ${isCorrect ? "bg-cyan-600 hover:bg-cyan-600 " : "bg-yellow-700 hover:bg-yellow-800"}
                `}
                onClick={() => goToNext(isCorrect)}
              >
                {isCorrect ? "Next" : "Skip"}
              </button>
            </div>
          </div>
        )}
        <label className="flex align-items-center mt-8 lg:mt-4 cursor-pointer">
          <input
            checked={useSpecialCharacters}
            onChange={(e) => setUseSpecialCharacters(e.target.checked)}
            type="checkbox"
            className="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="ps-2 text-gray-800">
            Don't count spanish special characters as error
          </span>
        </label>
        <pre>{JSON.stringify(answerResults, null, 2)}</pre>
        <div>{answerCounter}</div>
      </div>
    </div>
  );
};

export default CheckForm;
