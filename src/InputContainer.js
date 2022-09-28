import styles from './InputContainer.module.css';
import constants from './constants';
import TipButton from './TipButton';
// import React, { useState, useReducer } from 'react';

/**
 * Component that will take the inputs for bill, tip and number of people
 * @param {Object} props
 * @returns the JSX component of the inputs
 */
function InputForm({
  bill,
  people,
  tip,
  handleBillAmount,
  handleSelectedTip,
  handleCustomTip,
  numberOfPeople,
}) {
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

  // const [state, dispatch] = useReducer(reducer, initialState);
  const { BILL, TIPLABEL, PEOPLE } = constants;
  return (
    <div className={styles.form}>
      <div className={styles.labelGroup}>
        <label className={styles.label} htmlFor="bill">
          {BILL}
        </label>
        <input
          type="number"
          id="bill"
          onChange={handleBillAmount}
          value={bill}
        />
      </div>
      <div className={styles.tipSection}>
        <label htmlFor="tip">{TIPLABEL}</label>
        <div className={styles.tipAmountWrapper}>
          <TipButton handleSelectedTip={handleSelectedTip}></TipButton>
          <div className={styles.tipAmount}>
            <input
              type="text"
              name="tip"
              onInput={handleCustomTip}
              value={parseInt(tip * 100)}
            />
          </div>
        </div>
      </div>
      <div className={styles.labelGroup}>
        <div className={styles.labelWrapper}>
          <label htmlFor="people">{PEOPLE}</label>
        </div>
        <input
          type="number"
          id="people"
          onChange={numberOfPeople}
          value={people}
        />
      </div>
    </div>
  );
}

export default InputForm;
