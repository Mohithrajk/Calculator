import './App.css';
import React, { useReducer } from 'react';
import Calculator from './Calculator';
import InputForm from './InputContainer';
import logo from './logo.svg';
// import { handleBillAmount } from './actions';

/**
 * Main app component which contains the input and the calculator components
 * @returns the full working component of the inputs and calculator
 */
function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'BILL':
        return { ...state, bill: action.value };
      case 'TIP':
        return { ...state, tip: (action.value)/100 };
      case 'PEOPLE':
        return { ...state, people: action.value };
      case 'RESET':
        return { ...state, ...initialState };
      default:
        return state;
    }
  };

  const initialState = {
    bill: 0,
    tip: 0,
    people: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleState = (type, value) => {
    dispatch({ type: type, value: value });
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <div className="container">
        <InputForm state={state} handleState={handleState}></InputForm>
        <Calculator state={state} handleState={handleState}></Calculator>
      </div>
    </div>
  );
}

export default App;
