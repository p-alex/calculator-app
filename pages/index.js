import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (/(\x|\/|\+|\-|\.){2,}/.test(calc)) {
      setCalc(calc.slice(0, calc.length - 1));
    }
  }, [calc]);

  const handleThemeChange = (theme) => setTheme(theme);

  const handleCalc = (char) =>
    calc.length < 14 ? setCalc((calc += char)) : null;

  const handleReset = () => setCalc("");

  const handleResult = () => {
    if (
      !/(\x|\/|\+|\-)/.test(calc.slice(calc.length - 1, calc.length)) &&
      !/(\x|\/)/.test(calc.slice(0, 1)) &&
      !/(\+|\-|\x|\/)0{1,}[1-9]{1,}/g.test(calc) &&
      !/^0[0-9]{1,}/.test(calc) &&
      !/\.(\+|\-|\x|\/){1,}/.test(calc) &&
      calc.length &&
      calc !== "."
    )
      return setCalc(eval(calc.replaceAll("x", "*")).toFixed(5).toString());
    return setCalc("");
  };

  const handleDelete = () =>
    calc.length !== 1 ? setCalc(calc.slice(0, calc.length - 1)) : setCalc("");

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
