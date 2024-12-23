import React from "react";

interface SelectProps {
  id: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ id, options }) => {
  return (
    <select id={id} className="bg-white rounded-[3px] px-4 py-1">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
