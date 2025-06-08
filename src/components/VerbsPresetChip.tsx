import { verbsPresets } from "@/data/verbsPresets";
import { mergeSelectedVerbs } from "@/features/selectedVerbsSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface VerbConfig {
  key: string;
  verbs: string[];
}

interface Props {
  verbConfig: VerbConfig;
}

const VerbsPresets = ({ verbConfig }: Props) => {
  console.log("VerbsPresets selected");
  console.log(verbsPresets);
  console.log(verbConfig);
  const dispatch = useDispatch();

  function choosePreset(verbConfig: VerbConfig): any {
    const verbsList = verbConfig.verbs;
    console.log(verbsList);
    dispatch(mergeSelectedVerbs(verbsList));
  }

  return (
    <div>
      <div onClick={() => choosePreset(verbConfig)}>
        {verbConfig.key.toUpperCase()}
      </div>
    </div>
  );
};

export default VerbsPresets;
