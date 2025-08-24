interface Props {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const UiChooseList = ({ options, selectedOptions, onChange }: Props) => {
  const handleChange = (item: string) => {
    if (selectedOptions.includes(item)) {
      // If the item is already selected, remove it
      onChange(selectedOptions.filter((option) => option !== item));
    } else {
      // If the item is not selected, add it
      onChange([...selectedOptions, item]);
    }
  };

  const isActive = (item: string) => selectedOptions.includes(item);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {(options as any).map((option: string, index: number) => (
        <li
          key={`Choose-list_${index}`}
          className="p-2 lg:p-4 bg-gray-500 shadow-md flex items-center cursor-pointer text-white"
          onClick={() => handleChange(option)}
        >
          <div>
            <input
              type="checkbox"
              checked={isActive(option)}
              readOnly
              className="h-5 w-5 mr-2 text-blue-600 bg-white border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default UiChooseList;
