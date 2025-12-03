import { useState } from "react";
import {
  mergeSelectedVerbs,
  removeFromSelectedVerbs,
} from "@/store/modules/selectedVerbsSlice";
import { useDispatch, useSelector } from "react-redux";
import * as ga from "@/plugins/ga";

interface VerbConfig {
  key: string;
  verbs: string[];
}

interface Props {
  verbConfig: VerbConfig;
}

const VerbsPresets = ({ verbConfig }: Props) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const id = `preset-${verbConfig.key}`;

  function choosePreset(verbConfig: VerbConfig, inputState: boolean): any {
    const verbsList = verbConfig.verbs;

    ga.event("chose_verbs", {
      category: "via_presets",
      label: "select preset",
      attempted_verbs: verbsList,
    });
    if (inputState) {
      dispatch(mergeSelectedVerbs(verbsList));
    } else {
      dispatch(removeFromSelectedVerbs(verbsList));
    }
  }

  function handleClick(verbConfig: VerbConfig, inputState: boolean): any {
    setChecked(inputState);
    choosePreset(verbConfig, inputState);
  }

  return (
    <div>
      <div>
        <label
          htmlFor={id}
          className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition"
        >
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={() => handleClick(verbConfig, !checked)}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <span>{verbConfig.key.toUpperCase()}</span>
        </label>
      </div>
    </div>
  );
};

export default VerbsPresets;
