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
    <ul>
      {(options as any).map((option: string, index: number) => (
        <li key={`Choose-list_${index}`} onClick={() => handleChange(option)}>
          {option}
        </li>
      ))}
    </ul>
  );
};

export default UiChooseList;
