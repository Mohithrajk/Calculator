import styles from './InputContainer.module.css';
import { useState } from 'react';

function TipButton({ handleState }) {
  const [active, setActive] = useState(0);
  const setHandle = (item, e) => {
    handleState('TIP', e);
    setActive(item);
  };
  const TIPS = [5, 10, 15, 25, 50];
  return TIPS.map((item, index) => {
    return (
      <div key={index} className={styles.tipAmount}>
        <button
          className={active === item ? styles.tipOnclick : styles.tip}
          onClick={(e) => setHandle(item, e.target.value)}
          value={item / 100}
        >
          {item}%
        </button>
      </div>
    );
  });
}
export default TipButton;
