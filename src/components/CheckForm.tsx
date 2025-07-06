import { useState } from "react";

interface Props {
  correctAnswer: string;
  goToNext: () => void;
  useSpecialCharacters: boolean;
  setUseSpecialCharacters: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckForm = ({
  correctAnswer = "",
  goToNext,
  useSpecialCharacters = true,
  setUseSpecialCharacters,
}: Props) => {
  const [query, setQuery] = useState("");
  const [showResult, setshowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wantTooSee, setWantTooSee] = useState(false);

  function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function checkResult() {
    console.log(correctAnswer);
    console.log(useSpecialCharacters);
    const localQuery = useSpecialCharacters
      ? removeAccents(query.toLowerCase())
      : query.toLowerCase();
    const localAnswer = useSpecialCharacters
      ? removeAccents(correctAnswer.toLowerCase())
      : correctAnswer.toLowerCase();
    setshowResult(true);
    setIsCorrect(localQuery === localAnswer);
  }

  return (
    <div className="flex items-start">
      <div>
        <div className="mb-4">
          <input
            type="text"
            className="px-4 py-2 mt-2 mr-4 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="You're answer"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                checkResult();
              }
            }}
            autoComplete="off"
            style={{ minWidth: 300 }}
          />
          <button
            onClick={() => checkResult()}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 focus:outline-none focus:shadow-outline"
          >
            Check answer
          </button>
        </div>
        {showResult && (
          <div className="flex align-middle items-center">
            {isCorrect ? (
              <>
                <span className="text-green-500">&#x2714;</span>{" "}
                {/* Checkmark icon */}
                <span className="font-bold text-green-500">You're right!</span>
              </>
            ) : (
              <>
                <span className="text-red-500">&#x2716;</span>{" "}
                {/* Cross icon */}
                <span className="font-bold text-red-500">Try again!</span>
              </>
            )}
            <div className="flex  ms-4">
              {!isCorrect && wantTooSee && (
                <div>
                  The correct answer is <b>{correctAnswer}</b>
                </div>
              )}
              {!isCorrect && !wantTooSee && (
                <div
                  className="underline cursor-pointer italic"
                  onClick={() => setWantTooSee(true)}
                >
                  Show correct answer
                </div>
              )}
            </div>
            <div className="">
              <button
                className={`ml-4 px-6 py-2 text-white font-bold shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition
                ${isCorrect ? "bg-cyan-600 hover:bg-cyan-600 " : "bg-yellow-700 hover:bg-yellow-800"}
                `}
                onClick={() => goToNext()}
              >
                {isCorrect ? "Next" : "Skip"}
              </button>
            </div>
          </div>
        )}
        <label className="flex align-items-center mt-4 cursor-pointer">
          <input
            checked={useSpecialCharacters}
            onChange={(e) => setUseSpecialCharacters(e.target.checked)}
            type="checkbox"
            className="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <span className="ps-2">
            Don't count spanish special characters as error
          </span>
        </label>
      </div>
    </div>
  );
};

export default CheckForm;
