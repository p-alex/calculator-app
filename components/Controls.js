import styles from "../styles/Controls.module.css";
export default function Controls({
  handleResult,
  handleCalc,
  handleDelete,
  handleReset,
}) {
  const numPads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className={styles.controls}>
      {numPads.map((num) => (
        <div
          key={num}
          className={styles.number + " " + styles.btn}
          onClick={() => handleCalc(num)}
        >
          <span>{num}</span>
        </div>
      ))}
      <div
        className={styles.plus + " " + styles.btn}
        onClick={() => handleCalc("+")}
      >
        <span>+</span>
      </div>
      <div
        className={styles.minus + " " + styles.btn}
        onClick={() => handleCalc("-")}
      >
        <span>-</span>
      </div>
      <div
        className={styles.divide + " " + styles.btn}
        onClick={() => handleCalc("/")}
      >
        <span>/</span>
      </div>
      <div
        className={styles.multiply + " " + styles.btn}
        onClick={() => handleCalc("*")}
      >
        <span>x</span>
      </div>
      <div className={styles.reset + " " + styles.btn} onClick={handleReset}>
        <span>RESET</span>
      </div>
      <div className={styles.equal + " " + styles.btn} onClick={handleResult}>
        <span>=</span>
      </div>
      <div className={styles.del + " " + styles.btn} onClick={handleDelete}>
        <span>DEL</span>
      </div>
      <div
        className={styles.period + " " + styles.btn}
        onClick={() => handleCalc(".")}
      >
        <span>.</span>
      </div>
    </div>
  );
}
