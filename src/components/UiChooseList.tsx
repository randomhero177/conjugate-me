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
          className="p-4 bg-gray-500 rounded-lg shadow-md flex items-center cursor-pointer text-white"
          onClick={() => handleChange(option)}
        >
          {option}
          {isActive(option) && (
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UiChooseList;
