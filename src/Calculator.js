import styles from './Calculator.module.css';

/**
 * Component that will be used to calculate and display the result
 * @param {Object} props
 * @returns JSX component for the function calculator
 */
function Calculator({ people, bill, tip, setBill, setTip, setPeople }) {
  const tipValue = (tip * bill) / people;

  /**
   * Function that will split the Tip amount by the number of peoples
   * @returns the tip amount that has been split
   */
  function splitTip() {
    return bill > 0 && people > 0 ? tipValue.toFixed(2) : '0.00';
  }

  /**
   * Function that will split the amount including the tip amount
   * @returns the total splitted bill
   */
  function splitAmount() {
    let value = bill / people;
    value += tipValue;
    return bill > 0 && people > 0 ? value.toFixed(2) : '0.00';
  }

  /**
   * Function that will reset all the values to 0
   */
  function resetValues() {
    setPeople(0);
    setBill(0);
    setTip(0);
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorGroup}>
        <div className={styles.calculatorUnit}>
          <div className={styles.calculatorLabel}>
            <p className={styles.header}>Tip Amount</p>
            <p className={styles.unit}>/ person</p>
          </div>
          <div className={styles.value}>
            <p>${splitTip()}</p>
          </div>
        </div>

        <div className={styles.calculatorUnit}>
          <div className={styles.calculatorLabel}>
            <p className={styles.header}>Total</p>
            <p className={styles.unit}>/ person</p>
          </div>
          <div className={styles.value}>
            <p>${splitAmount()}</p>
          </div>
        </div>
      </div>
      <button className={styles.btn} onClick={resetValues}>
        reset
      </button>
    </div>
  );
}

export default Calculator;
