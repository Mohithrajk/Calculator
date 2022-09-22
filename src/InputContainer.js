import styles from './InputContainer.module.css';

/**
 * Component that will take the inputs for bill, tip and number of people
 * @param {Object} props
 * @returns the JSX component of the inputs
 */
function Input({
  handleBillAmount,
  billAmount,
  handleSelectedTip,
  handleCustomTip,
  numberOfPeople,
  people,
}) {
  return (
    <div className={styles.form}>
      <div className={styles.labelGroup}>
        <label className={styles.label} htmlFor="bill">
          Bill
        </label>
        <input
          type="number"
          id="bill"
          onInput={handleBillAmount}
          value={billAmount}
        />
      </div>
      <div className={styles.tipSection}>
        <label htmlFor="tip">Select Tip %</label>
        <div className={styles.tipAmountWrapper}>
          <div className={styles.tipAmount}>
            <button
              className={styles.tip}
              onClick={handleSelectedTip}
              value="0.05"
            >
              5%
            </button>
          </div>
          <div className={styles.tipAmount}>
            <button
              className={styles.tip}
              onClick={handleSelectedTip}
              value="0.1"
            >
              10%
            </button>
          </div>
          <div className={styles.tipAmount}>
            <button
              className={styles.tip}
              onClick={handleSelectedTip}
              value="0.15"
            >
              15%
            </button>
          </div>
          <div className={styles.tipAmount}>
            <button
              className={styles.tip}
              onClick={handleSelectedTip}
              value="0.25"
            >
              25%
            </button>
          </div>
          <div className={styles.tipAmount}>
            <button
              className={styles.tip}
              onClick={handleSelectedTip}
              value="0.5"
            >
              50%
            </button>
          </div>
          <div className={styles.tipAmount}>
            <input type="text" name="tip" onInput={handleCustomTip} />
          </div>
        </div>
      </div>
      <div className={styles.labelGroup}>
        <div className={styles.labelWrapper}>
          <label htmlFor="people">Number of people</label>
        </div>
        <input
          type="number"
          id="people"
          onInput={numberOfPeople}
          value={people}
        />
      </div>
    </div>
  );
}

export default Input;
