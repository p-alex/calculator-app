import styles from "../styles/Controls.module.css";
export default function Controls() {
  return (
    <div className={styles.controls}>
      <div className={styles.number + " " + styles.btn}>
        <span>1</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>2</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>3</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>4</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>5</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>6</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>7</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>8</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>9</span>
      </div>
      <div className={styles.number + " " + styles.btn}>
        <span>0</span>
      </div>
      <div className={styles.plus + " " + styles.btn}>
        <span>+</span>
      </div>
      <div className={styles.minus + " " + styles.btn}>
        <span>-</span>
      </div>
      <div className={styles.divide + " " + styles.btn}>
        <span>/</span>
      </div>
      <div className={styles.multiply + " " + styles.btn}>
        <span>x</span>
      </div>
      <div className={styles.reset + " " + styles.btn}>
        <span>RESET</span>
      </div>
      <div className={styles.equal + " " + styles.btn}>
        <span>=</span>
      </div>
      <div className={styles.del + " " + styles.btn}>
        <span>DEL</span>
      </div>
      <div className={styles.period + " " + styles.btn}>
        <span>.</span>
      </div>
    </div>
  );
}
