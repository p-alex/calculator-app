import styles from "../styles/Header.module.css";
import styled from "styled-components";
const Dots = styled.div`
  background-color: ${(props) => props.theme.key_tertiary_bg};
`;
const Logo = styled.h1`
  color: ${(props) => props.theme.logo_and_labels};
`;
const ThemeSwitch = styled.div`
  background-color: ${(props) => props.theme.keypad_and_toggle_bg};
`;
const ThemeNumberLabel = styled.span`
  color: ${(props) => props.theme.logo_and_labels};
`;
const ThemeTextLabel = styled.span`
  color: ${(props) => props.theme.logo_and_labels};
`;
export default function Header({ theme, handleThemeChange }) {
  return (
    <header className={styles.header}>
      <Logo>calc</Logo>
      <div className={styles.theme}>
        <ThemeTextLabel>THEME</ThemeTextLabel>
        <ThemeSwitch className={styles.theme_switch}>
          <div className={styles.theme_numbers}>
            <ThemeNumberLabel>1</ThemeNumberLabel>
            <ThemeNumberLabel>2</ThemeNumberLabel>
            <ThemeNumberLabel>3</ThemeNumberLabel>
          </div>
          <Dots
            className={
              theme == "theme-one"
                ? styles.dot + " " + styles.current_theme
                : styles.dot
            }
            onClick={() => handleThemeChange("theme-one")}
          ></Dots>
          <Dots
            className={
              theme == "theme-two"
                ? styles.dot + " " + styles.current_theme
                : styles.dot
            }
            onClick={() => handleThemeChange("theme-two")}
          ></Dots>
          <Dots
            className={
              theme == "theme-three"
                ? styles.dot + " " + styles.current_theme
                : styles.dot
            }
            onClick={() => handleThemeChange("theme-three")}
          ></Dots>
        </ThemeSwitch>
      </div>
    </header>
  );
}
