import styles from './InputContainer.module.css';

function TipButton({ handleSelectedTip }) {
  const TIPS = [5, 10, 15, 25, 50];
  return TIPS.map((item, index) => {
    return (
      <div key={index} className={styles.tipAmount}>
        <button className={styles.tip} onClick={handleSelectedTip} value={item}>
          {item}%
        </button>
      </div>
    );
  });
}
export default TipButton;
