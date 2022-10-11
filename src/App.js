import './App.css';
import React from 'react';
import Calculator from './Calculator';
import store from './redux/store';
import InputForm from './InputContainer';
import logo from './logo.svg';
import { Provider } from 'react-redux';
/**
 * Main app component which contains the input and the calculator components
 * @returns the full working component of the inputs and calculator
 */
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img className="logo" src={logo} alt="" />
        <div className="container">
          <InputForm />
          <Calculator />
        </div>
      </div>
    </Provider>
  );
}

export default App;
