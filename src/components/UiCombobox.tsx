// components/UiCombobox.js
import { useState, useEffect, useRef } from "react";

const UiCombobox = ({
  options = [],
  label = "Select an option",
  isMultiple = false,
  onChange,
}) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    isMultiple ? [] : null,
  );
  const containerRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  }, [query, options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option) => {
    let updatedSelection;
    if (isMultiple) {
      updatedSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    } else {
      updatedSelection = option;
      setQuery(option); // Set the selected option as the input value
      setIsOpen(false); // Close dropdown after selection
    }
    setSelectedOptions(updatedSelection);

    // Emit selected values to the parent component
    if (onChange) onChange(updatedSelection);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto mt-10" ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        autoComplete="off"
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer ${
                isMultiple && selectedOptions.includes(option)
                  ? "bg-indigo-500 text-white"
                  : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {isMultiple && selectedOptions.length > 0 && (
        <div className="mt-2 space-x-2">
          {selectedOptions.map((option) => (
            <span
              key={option}
              className="inline-block px-2 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded"
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default UiCombobox;
