import { mergeSelectedVerbs } from "@/store/modules/selectedVerbsSlice";
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

  function choosePreset(verbConfig: VerbConfig): any {
    const verbsList = verbConfig.verbs;

    ga.event("chose_verbs", {
      category: "via_presets",
      label: "select preset",
      attempted_verbs: verbsList,
    });
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
