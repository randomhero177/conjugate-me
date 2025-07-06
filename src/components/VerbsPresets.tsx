import { verbsPresets } from "@/data/verbsPresets";
import VerbsPresetChip from "@/components/VerbsPresetChip";

const VerbsPresets = () => {
  return (
    <div>
      <h4 className="mb-4 block text-xl text-center font-medium text-gray-700">
        Choose from the preset
      </h4>
      <ul className="flex flex-wrap gap-2 mb-4 justify-center">
        {verbsPresets.map((presetVerb, index) => (
          <li
            key={`verbsPresets_${index}`}
            className="inline-flex items-center px-4 py-2 font-medium text-white bg-cyan-600 cursor-pointer"
          >
            <VerbsPresetChip verbConfig={presetVerb} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerbsPresets;
