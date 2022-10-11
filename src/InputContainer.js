import { connect } from 'react-redux';
import constants from './constants';
import TipButton from './TipButton';
import { handleState } from './redux/actions';
import styles from './InputContainer.module.css';

/**
 * Component that will take the inputs for bill, tip and number of people
 * @param {Object} props
 * @returns the JSX component of the inputs
 */
function InputForm({ bill, people, handleState }) {
  const { BILLLABEL, TIPLABEL, PEOPLE } = constants;
  return (
    <div className={styles.form}>
      <div className={styles.labelGroup}>
        <label className={styles.label} htmlFor='bill'>
          {BILLLABEL}
        </label>
        <input
          type='number'
          id='bill'
          onChange={(e) => handleState('BILL', e.target.value)}
          value={bill}
        />
      </div>
      <div className={styles.tipSection}>
        <label htmlFor='tip'>{TIPLABEL}</label>
        <div className={styles.tipAmountWrapper}>
          <TipButton handleState={handleState} />
          <div className={styles.tipAmount}>
            <input
              type='text'
              name='tip'
              onChange={(e) => handleState('TIP', e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.labelGroup}>
        <div className={styles.labelWrapper}>
          <label htmlFor='people'>{PEOPLE}</label>
        </div>
        <input
          type='number'
          id='people'
          onChange={(e) => handleState('PEOPLE', e.target.value)}
          value={people}
        />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
