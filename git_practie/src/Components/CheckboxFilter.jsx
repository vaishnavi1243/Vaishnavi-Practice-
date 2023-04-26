import React, { useState } from "react";

const CheckboxFilter = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (option) => {
    let newSelectedOptions = [...selectedOptions];
    if (newSelectedOptions.includes(option)) {
      newSelectedOptions = newSelectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions.push(option);
    }
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className="checkbox-filter">
      <button className="dropdown-toggle" onClick={toggleOpen}>
        Select Options
        <span className={`dropdown-arrow ${isOpen ? "up" : "down"}`} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxFilter;
