import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>calc</h1>
      <div className={styles.theme}>
        <span>THEME</span>
        <div className={styles.theme_switch}>
          <div className={styles.dot}>
            <span>1</span>
          </div>
          <div className={styles.dot}>
            <span>2</span>
          </div>
          <div className={styles.dot}>
            <span>3</span>
          </div>
        </div>
      </div>
    </header>
  );
}
