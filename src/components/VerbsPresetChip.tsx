import { verbsPresets } from "@/data/verbsPresets";

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

  function choosePreset(key: string): any {
    console.log(key);
    const verbsList = verbsPresets.find((elem) => elem.key === key);
  }

  return (
    <div>
      <div>{verbConfig.key}</div>
    </div>
  );
};

export default VerbsPresets;
