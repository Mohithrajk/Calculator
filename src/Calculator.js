import { useState, useEffect } from 'react';
import styles from './Calculator.module.css';
import constants from './constants';

/**
 * Component that will be used to calculate and display the result
 * @param {Object} props
 * @returns JSX component for the function calculator
 */
function Calculator({ state, handleState }) {
  const { bill, people, tip } = state;
  const { TIPAMOUNT, TOTAL, PERPERSON, RESET } = constants;
  const [billPerPerson, SetBillPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  /**
   * Function that will reset all the values to 0
   */
  const resetValues = (e) => {
    handleState('RESET', e.target.value);
    setTipPerPerson('0.00');
    SetBillPerPerson('0.00');
  };

  useEffect(() => {
    if (people <= 0) {
      setTipPerPerson('0.00');
      SetBillPerPerson('0.00');
    } else {
      const CalculateAmount = () => {
        const tipValue = (tip * bill) / people;
        let value = bill / people + tipValue;
        SetBillPerPerson(value.toFixed(2));
        setTipPerPerson(tipValue.toFixed(2));
      };
      CalculateAmount();
    }
  }, [bill, tip, people]);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorGroup}>
        <div className={styles.calculatorUnit}>
          <div className={styles.calculatorLabel}>
            <p className={styles.header}>{TIPAMOUNT}</p>
            <p className={styles.unit}>{PERPERSON}</p>
          </div>
          <div className={styles.value}>
            <p>${tipPerPerson}</p>
          </div>
        </div>

        <div className={styles.calculatorUnit}>
          <div className={styles.calculatorLabel}>
            <p className={styles.header}>{TOTAL}</p>
            <p className={styles.unit}>{PERPERSON}</p>
          </div>
          <div className={styles.value}>
            <p>${billPerPerson}</p>
          </div>
        </div>
      </div>
      <button className={styles.btn} onClick={(e) => resetValues(e)}>
        {RESET}
      </button>
    </div>
  );
}

export default Calculator;
