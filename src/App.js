import React, { useState } from 'react';
import './App.css'; // Add CSS file for styling

import CountdownTimer from './components/CountdownTimer';
import InputForm from './components/InputForm';

function App() {
  const [targetDate, setTargetDate] = useState(null);

  const handleSetTargetDate = (date) => {
    setTargetDate(date);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <InputForm onSetTargetDate={handleSetTargetDate} />
      {targetDate && <CountdownTimer targetDate={targetDate} />}
    </div>
  );
}

export default App;