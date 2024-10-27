// components/UiCombobox.js
import { useState, useEffect, useRef } from "react";

const UiCombobox = ({
  options = [],
  label = "Select an option",
  isMultiple = false,
  onChange,
  updateFilteredOptions,
  minSearchLength = 0,
  showSelectedChips = true,
  preselectedOptions = isMultiple ? [] : null,
}) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(preselectedOptions);
  const containerRef = useRef(null);

  useEffect(() => {
    if (query.length >= minSearchLength) {
      const newFilteredOptions = options.filter((option) =>
        option.toLowerCase().startsWith(query.toLowerCase()),
      );
      setFilteredOptions(newFilteredOptions);
    } else {
      setFilteredOptions([]);
    }
  }, [query, options, minSearchLength]);

  useEffect(() => {
    if (updateFilteredOptions && typeof updateFilteredOptions === "function") {
      updateFilteredOptions(filteredOptions);
    }
  }, [filteredOptions, updateFilteredOptions]);

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

  useEffect(() => {
    // Initialize selectedOptions with preselectedOptions only once when the component mounts
    if (isMultiple) {
      setSelectedOptions(preselectedOptions);
    } else {
      setSelectedOptions(preselectedOptions);
      setQuery(preselectedOptions || "");
    }
  }, []); // Empty dependency array to run only once

  const handleInputChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^a-zA-Z]/g, "");
    setQuery(filteredValue);
    setIsOpen(filteredValue.length >= minSearchLength);
  };

  const handleOptionClick = (option) => {
    let updatedSelection;
    if (isMultiple) {
      updatedSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
    } else {
      updatedSelection = option;
      setQuery(option);
      setIsOpen(false);
    }
    setSelectedOptions(updatedSelection);
    if (onChange) onChange(updatedSelection);
  };

  const removeSelected = (index) => {
    const updatedSelection = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(updatedSelection);
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
        onFocus={() => setIsOpen(query.length >= minSearchLength)}
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
      {isMultiple && selectedOptions.length > 0 && showSelectedChips && (
        <div className="mt-2 space-x-2">
          {selectedOptions.map((option, index) => (
            <span
              key={option}
              className="inline-block px-2 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded"
            >
              <span className="flex items-center">
                {option}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 cursor-pointer"
                  onClick={() => removeSelected(index)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default UiCombobox;
