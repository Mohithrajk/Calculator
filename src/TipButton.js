import { useState, useEffect } from 'react';
import styles from './InputContainer.module.css';

function TipButton({ handleState, isCustomActive }) {
  const [active, setActive] = useState(0);
  const setHandle = (item, e) => {
    handleState('TIP', e);
    setActive(item);
  };
  const TIPS = [5, 10, 15, 25, 50];

  useEffect(() => {
    setActive(false);
  }, [isCustomActive])

  return TIPS.map((item, index) => {
    return (
      <div key={index} className={styles.tipAmount}>
        <button
          className={active === item ? styles.tipOnclick : styles.tip}
          onClick={(e) => setHandle(item, e.target.value)}
          value={item}
        >
          {item}%
        </button>
      </div>
    );
  });
}
export default TipButton;
