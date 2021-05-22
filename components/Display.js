import styles from "../styles/Display.module.css";
export default function Display({ calc }) {
  return (
    <div
      className={
        calc.length ? styles.display : styles.display + " " + styles.empty
      }
    >
      <span>{calc}</span>
    </div>
  );
}
