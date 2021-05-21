import Head from "next/head";
import styles from "../styles/Home.module.css";
import Calculator from "../containers/Calculator";
import Header from "../components/Header";
import Display from "../components/Display";
import Controls from "../components/Controls";
export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator app | Frontend Mentor challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.design}></div>
      <Calculator>
        <Header />
        <Display />
        <Controls />
      </Calculator>
    </>
  );
}
