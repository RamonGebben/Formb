import React, { ChangeEvent } from "react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  label: string;
}

const Select: React.FC<SelectProps> = ({ value, onChange, options, label }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={value}
        onChange={handleChange}
        style={{ width: "100%" }}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            style={{ width: "100%" }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
