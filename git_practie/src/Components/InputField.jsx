import React, { useState } from 'react';

function InputField() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="input-field">Enter your text:</label>
      <input
        type="text"
        id="input-field"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputField;
