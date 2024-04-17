import React, { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number";
  value: string | number;
  onChange: (value: string | number) => void;
  label: string;
}

const Input: React.FC<InputProps> = ({ type, value, label, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    switch (type) {
      case "text":
        onChange(inputValue);
        break;
      case "number":
        onChange(parseFloat(inputValue));
        break;
      default:
        break;
    }
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
      <input
        id={label}
        type={type}
        value={value}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Input;
