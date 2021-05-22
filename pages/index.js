import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Calculator from "../containers/Calculator";
import Header from "../components/Header";
import Display from "../components/Display";
import Controls from "../components/Controls";
export default function Home() {
  let [calc, setCalc] = useState("");

  const handleCalc = (char) =>
    calc.length < 14 ? setCalc((calc = calc + char)) : null;

  const handleReset = () => setCalc("");

  const handleResult = () => {
    const regFirstChar = /(\*|\/)/;
    const regLastChar = /(\*|\/|\-|\+)/;
    const regBetweenChar = /([\*|\+|\-|\/|\.]{2,})/;
    if (
      !regLastChar.test(calc.slice(calc.length - 1, calc.length)) &&
      !regFirstChar.test(calc.slice(0, 1)) &&
      !regBetweenChar.test(calc.slice(1, calc.length - 1))
    ) {
      setCalc(eval(calc).toString());
    } else {
      setCalc("");
    }
  };

  const handleDelete = () => {
    calc.length !== 1 ? setCalc(calc.slice(0, calc.length - 1)) : setCalc("");
  };

  return (
    <>
      <Head>
        <title>Calculator app | Frontend Mentor challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.design}></div>
      <Calculator>
        <Header />
        <Display calc={calc} />
        <Controls
          handleReset={handleReset}
          handleCalc={handleCalc}
          handleResult={handleResult}
          handleDelete={handleDelete}
        />
      </Calculator>
    </>
  );
}
