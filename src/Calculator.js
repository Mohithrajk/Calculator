import { useState , useEffect } from 'react';
import styles from './Calculator.module.css';
import constants from './constants';

/**
 * Component that will be used to calculate and display the result
 * @param {Object} props
 * @returns JSX component for the function calculator
 */
function Calculator({ people, bill, tip, setBill, setTip, setPeople }) {
  const { TIPAMOUNT, TOTAL, PERPERSON, RESET } = constants;
  const [billPerPerson, SetBillPerPerson] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  const tipValue = (tip * bill) / people;
  /**
   * Function that will split the Tip amount by the number of peoples
   */
  const splitTip = () => {
    const tipPerPerson = bill > 0 && people > 0 ? tipValue.toFixed(2) : '0.00';
    setTipPerPerson(tipPerPerson);
  };

  /**
   * Function that will split the amount including the tip amount
   * @returns the total splitted bill
   */
  const splitAmount = () => {
    let value = bill / people;
    value += tipValue;
    const billPerPerson = bill > 0 && people > 0 ? value.toFixed(2) : '0.00';
    SetBillPerPerson(billPerPerson);
  };

  /**
   * Function that will reset all the values to 0
   */
  const resetValues = () => {
    setPeople(0);
    setBill(0);
    setTip(0);
    setTipPerPerson('0.00');
    SetBillPerPerson('0.00');
  };

  useEffect(() => {
    splitTip();
    splitAmount();
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
      <button className={styles.btn} onClick={resetValues}>
        {RESET}
      </button>
    </div>
  );
}

export default Calculator;
