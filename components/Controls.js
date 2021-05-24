import styles from "../styles/Controls.module.css";
import styled from "styled-components";
const ControlsContainer = styled.div`
  background-color: ${(props) => props.theme.keypad_and_toggle_bg};
`;
const Pad = styled.div`
  background-color: ${(props) => props.theme.key_primary_bg};
  color: ${(props) => props.theme.primary_textColor};
  border-bottom: solid 5px ${(props) => props.theme.key_primary_bg_shadow};
`;
const PadSecondary = styled.div`
  background-color: ${(props) => props.theme.key_secondary_bg};
  color: #fff;
  border-bottom: solid 5px ${(props) => props.theme.key_secondary_bg_shadow};
`;
const EqualPad = styled.div`
  background-color: ${(props) => props.theme.key_tertiary_bg};
  color: ${(props) => props.theme.tertiary_textColor};
  border-bottom: solid 5px ${(props) => props.theme.key_tertiary_bg_shadow};
`;
export default function Controls({
  handleResult,
  handleCalc,
  handleDelete,
  handleReset,
}) {
  const numPads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <ControlsContainer className={styles.controls}>
      {numPads.map((num) => (
        <Pad
          key={num}
          className={styles.number + " " + styles.btn}
          onClick={() => handleCalc(num)}
        >
          <span>{num}</span>
        </Pad>
      ))}
      <Pad
        className={styles.plus + " " + styles.btn}
        onClick={() => handleCalc("+")}
      >
        <span>+</span>
      </Pad>
      <Pad
        className={styles.minus + " " + styles.btn}
        onClick={() => handleCalc("-")}
      >
        <span>-</span>
      </Pad>
      <Pad
        className={styles.divide + " " + styles.btn}
        onClick={() => handleCalc("/")}
      >
        <span>/</span>
      </Pad>
      <Pad
        className={styles.multiply + " " + styles.btn}
        onClick={() => handleCalc("x")}
      >
        <span>x</span>
      </Pad>
      <PadSecondary
        className={styles.reset + " " + styles.btn}
        onClick={handleReset}
      >
        <span>RESET</span>
      </PadSecondary>
      <EqualPad
        className={styles.equal + " " + styles.btn}
        onClick={handleResult}
      >
        <span>=</span>
      </EqualPad>
      <PadSecondary
        className={styles.del + " " + styles.btn}
        onClick={handleDelete}
      >
        <span>DEL</span>
      </PadSecondary>
      <Pad
        className={styles.period + " " + styles.btn}
        onClick={() => handleCalc(".")}
      >
        <span>.</span>
      </Pad>
    </ControlsContainer>
  );
}
