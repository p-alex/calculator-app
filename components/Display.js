import styles from "../styles/Display.module.css";
import styled from "styled-components";
const Screen = styled.div`
  color: ${(props) => props.theme.logo_and_labels};
  background-color: ${(props) => props.theme.screen_bg};
`;
export default function Display({ calc }) {
  return (
    <Screen
      className={
        calc.length ? styles.display : styles.display + " " + styles.empty
      }
    >
      <span>{calc}</span>
    </Screen>
  );
}
