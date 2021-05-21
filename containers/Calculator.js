import styles from "../styles/Calculator.module.css";
export default function Calculator({ children }) {
  return <main className={styles.calculator}>{children}</main>;
}
