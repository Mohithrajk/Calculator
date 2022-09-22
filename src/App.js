import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import Input from './InputContainer';
import logo from './logo.svg';

/**
 * Main app component which contains the input and the calculator components
 * @returns the full working component of the inputs and calculator
 */
function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  /**
   * function that will set the bill using the input event value
   * @param {event} e
   */
  function handleBillAmount(e) {
    setBill(e.target.value);
  }

  /**
   * function that will set the tip using the button event value
   * @param {event} e
   */
  function handleSelectedTip(e) {
    setTip(e.target.value);
  }

  /**
   * function that will set the custom tip using the input event value
   * @param {event} e
   */
  function handleCustomTip(e) {
    setTip(e.target.value / 100);
  }

  /**
   * function that will set the number of people to split the bill with using input event value
   * @param {event} e
   */
  function numberOfPeople(e) {
    setPeople(e.target.value);
  }

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <div className="container">
        <Input
          billAmount={bill}
          handleBillAmount={handleBillAmount}
          handleSelectedTip={handleSelectedTip}
          handleCustomTip={handleCustomTip}
          numberOfPeople={numberOfPeople}
          people={people}
        ></Input>
        <Calculator
          bill={bill}
          people={people}
          tip={tip}
          setPeople={setPeople}
          setTip={setTip}
          setBill={setBill}
        ></Calculator>
      </div>
    </div>
  );
}

export default App;
