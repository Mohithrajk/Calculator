import styles from './InputContainer.module.css';
import constants from './constants';

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
  const { BILL, TIPLABEL, PEOPLE, TIPS } = constants;
  return (
    <div className={styles.form}>
      <div className={styles.labelGroup}>
        <label className={styles.label} htmlFor="bill">
          {BILL}
        </label>
        <input
          type="number"
          id="bill"
          onInput={handleBillAmount}
          value={billAmount}
        />
      </div>
      <div className={styles.tipSection}>
        <label htmlFor="tip">{TIPLABEL}</label>
        <div className={styles.tipAmountWrapper}>
          {TIPS.map((item) => {
            return (
              <div className={styles.tipAmount}>
                <button
                  className={styles.tip}
                  onClick={handleSelectedTip}
                  value={item / 100}
                >
                  {item}%
                </button>
              </div>
            );
          })}
          <div className={styles.tipAmount}>
            <input type="text" name="tip" onInput={handleCustomTip} />
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
          onInput={numberOfPeople}
          value={people}
        />
      </div>
    </div>
  );
}

export default Input;
