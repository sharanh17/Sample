import React, { useState } from 'react';

const InputForm = ({ onSetTargetDate }) => {
  const [inputDate, setInputDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      onSetTargetDate(date);
    } else {
      alert('Please enter a valid date and time.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="targetDate">Enter Target Date and Time:</label>
      <input
        type="datetime-local"
        id="targetDate"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        required
      />
      <button type="submit">Start Countdown</button>
    </form>
  );
};

export default InputForm;
