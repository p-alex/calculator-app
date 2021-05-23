import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeOne, themeTwo, themeThree, GlobalStyles } from "../themes/themes";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Calculator from "../containers/Calculator";
import Header from "../components/Header";
import Display from "../components/Display";
import Controls from "../components/Controls";
export default function Home() {
  let [calc, setCalc] = useState("");
  let [theme, setTheme] = useState("theme-one");

  const handleThemeChange = (theme) => setTheme(theme);

  const handleCalc = (char) =>
    calc.length < 14 ? setCalc((calc = calc + char)) : null;

  const handleReset = () => setCalc("");

  const handleResult = () => {
    if (
      !/(\*|\/|\+|\-)/.test(calc.slice(calc.length - 1, calc.length)) &&
      !/(\*|\/)/.test(calc.slice(0, 1)) &&
      !/([\*|\+|\-|\/|\.]{2,})/.test(calc.slice(1, calc.length - 1)) &&
      !/(\+|\-|\*|\/)0{1,}[1-9]{1,}/g.test(calc) &&
      !/^0[0-9]{1,}/.test(calc) &&
      !/\.(\+|\-|\*|\/){1,}/.test(calc) &&
      calc.length
    ) {
      setCalc(eval(calc).toString());
      return;
    }
    return setCalc("");
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
      <ThemeProvider
        theme={
          theme === "theme-one"
            ? themeOne
            : theme === "theme-two"
            ? themeTwo
            : theme === "theme-three"
            ? themeThree
            : themeOne
        }
      >
        <GlobalStyles />
        <Calculator>
          <Header theme={theme} handleThemeChange={handleThemeChange} />
          <Display calc={calc} />
          <Controls
            handleReset={handleReset}
            handleCalc={handleCalc}
            handleResult={handleResult}
            handleDelete={handleDelete}
          />
        </Calculator>
      </ThemeProvider>
    </>
  );
}
