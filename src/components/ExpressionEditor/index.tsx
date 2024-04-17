import React, { useState, ChangeEvent } from 'react';

interface RegexInputProps {
  onChange: (regex: string) => void;
}

const RegexInput: React.FC<RegexInputProps> = ({ onChange }) => {
  const [regex, setRegex] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegex(value);
    onChange(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent the default behavior of the Enter key to avoid form submission
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <input
      type="text"
      value={regex}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter regular expression..."
      style={{ width: '100%', fontFamily: 'monospace' }}
    />
  );
};

export default RegexInput;
