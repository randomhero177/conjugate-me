import { useDispatch } from "react-redux";
import { setSelectedVerbs } from "@/store/modules/selectedVerbsSlice";

const ClearAllVerbs = () => {
  const dispatch = useDispatch();
  const clearAllVerbs = () => {
    dispatch(setSelectedVerbs([]));
  };
  return (
    <div
      onClick={() => clearAllVerbs()}
      className="ms-4 cursor-pointer text-rose-400"
    >
      <span className="text-rose-400">&#x2716;</span> clear all
    </div>
  );
};

export default ClearAllVerbs;
