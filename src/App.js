import './App.css';
import React, { useState, useReducer } from 'react';

import Calculator from './Calculator';
import InputForm from './InputContainer';
import logo from './logo.svg';
// import { handleBillAmount } from './actions';

/**
 * Main app component which contains the input and the calculator components
 * @returns the full working component of the inputs and calculator
 */
function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'BILL':
  //       return state.bill;
  //       break;
  //     case 'TIP':
  //       return state.tip;
  //       break;
  //     default:
  //       return state;
  //   }
  // };

  // const initialState = {
  //   bill: 0,
  //   tip: 0,
  //   people: 0,
  // };

  function handleBillAmount(e) {
    setBill(e.target.value);
  }

  /**
   * function that will set the tip using the button event value
   * @param {event} e
   */
  function handleSelectedTip(e) {
    setTip(e.target.value / 100);
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

  const resetInput = () => {
    setPeople(0);
    setBill(0);
    setTip(0);
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <div className="container">
        <InputForm
          bill={bill}
          people={people}
          tip={tip}
          handleBillAmount={handleBillAmount}
          handleSelectedTip={handleSelectedTip}
          handleCustomTip={handleCustomTip}
          numberOfPeople={numberOfPeople}
        ></InputForm>
        <Calculator
          bill={bill}
          tip={tip}
          people={people}
          resetInput={resetInput}
        ></Calculator>
      </div>
    </div>
  );
}

export default App;
