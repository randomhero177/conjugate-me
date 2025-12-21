import { useDispatch, useSelector } from "react-redux";
import Dictionary from "@/data/dictionaryNoReflexiv";
import getRandomInRange from "@/util/getRandom";
import Tense from "@/data/tense";
import { setSelectedTenses } from "@/store/modules/selectedTensesSlice";
import { setSelectedVerbs } from "@/store/modules/selectedVerbsSlice";
type RandomVerbsProps = {
  mainAction: () => void;
};
export default function RandomVerbs({ mainAction }: RandomVerbsProps) {
  const dispatch = useDispatch();
  let verbsList: string[] = [];
  const existingTenses = Object.values(Tense);

  function getRandomVerbs() {
    console.log("getRandomVerbs");
    console.log(getRandomInRange(0, Dictionary.length - 1));

    for (let i = 0; i < 10; ++i) {
      const randomIndex = getRandomInRange(0, Dictionary.length - 1);
      verbsList.push(Dictionary[randomIndex]);
    }

    console.log(existingTenses);
    console.log(verbsList);
    dispatch(setSelectedVerbs(verbsList));
    dispatch(setSelectedTenses(existingTenses));
    mainAction(verbsList, existingTenses);
  }

  return (
    <div>
      <div>
        <button onClick={() => getRandomVerbs()}>
          Practice 10 random verbs
        </button>
      </div>
    </div>
  );
}
