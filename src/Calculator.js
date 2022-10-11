import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { handleState } from './redux/actions';
import constants from './constants';
import styles from './Calculator.module.css';

/**
 * Component that will be used to calculate and display the result
 * @param {Object} props
 * @returns JSX component for the function calculator
 */
function Calculator({ bill, tip, people, handleState }) {
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

  const calculateAmount = () => {
    const tipValue = (tip * bill) / people;
    const value = bill / people + tipValue;
    SetBillPerPerson(value.toFixed(2));
    setTipPerPerson(tipValue.toFixed(2));
  };

  useEffect(() => {
    if (people <= 0) {
      setTipPerPerson('0.00');
      SetBillPerPerson('0.00');
    } else {
      calculateAmount();
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

const mapStateToProps = (state) => ({
  bill: state.bill,
  tip: state.tip,
  people: state.people,
});

const mapDispatchToProps = {
  handleState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
