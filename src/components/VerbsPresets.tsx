import { verbsPresets } from "@/data/verbsPresets";
import VerbsPresetChip from "@/components/VerbsPresetChip";

const VerbsPresets = () => {
  console.log("VerbsPresets selected");

  return (
    <div>
      <ul>
        {verbsPresets.map((presetVerb, index) => (
          <li key={`verbsPresets_${index}`}>
            <VerbsPresetChip verbConfig={presetVerb} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerbsPresets;
