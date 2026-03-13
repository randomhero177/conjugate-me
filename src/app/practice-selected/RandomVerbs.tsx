import { useDispatch, useSelector } from "react-redux";
import Dictionary from "@/data/dictionaryNoReflexiv";
import getRandomInRange from "@/util/getRandom";
import { TensesList } from "@/data/tense";
import { setSelectedTenses } from "@/store/modules/selectedTensesSlice";
import { setSelectedVerbs } from "@/store/modules/selectedVerbsSlice";
type RandomVerbsProps = {
  mainAction: (verbs: string[], tenses: string[]) => void;
};
export default function RandomVerbs({ mainAction }: RandomVerbsProps) {
  const dispatch = useDispatch();
  let verbsList: string[] = [];
  let tensesList: string[] = [];
  const existingTenses = Object.values(TensesList);

  function getRandomVerbs() {
    for (let i = 0; i < 10; ++i) {
      const randomIndex = getRandomInRange(0, Dictionary.length - 1);
      verbsList.push(Dictionary[randomIndex]);
    }

    for (let i = 0; i < 3; ++i) {
      const randomIndex = getRandomInRange(0, existingTenses.length - 1);
      tensesList.push(existingTenses[randomIndex]);
    }

    dispatch(setSelectedVerbs(verbsList));
    dispatch(setSelectedTenses(tensesList));
    mainAction(verbsList, tensesList);
  }

  return (
    <div>
      <div>
        <button
          onClick={() => getRandomVerbs()}
          className="ml-4 px-6 py-2 bg-green-500 text-amber-50 font-bold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
        >
          Practice random verbs
        </button>
      </div>
    </div>
  );
}
