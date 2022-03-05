import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import NumToRoman from "../components/forms/NumToRoman";
import RomanToNum from "../components/forms/RomanToNum";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const handleSwitch = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>When in Rome</title>
        <meta
          name="description"
          content="Convert numbers to Roman Numerals and vice versa"
        />
        <link rel="icon" href="/roman.ico" />
      </Head>

      <main className={styles.main}>
        <h1>When In Rome</h1>
        <div className={styles.background}>
          <div className={styles.form}>
            <div className={styles.switchButton}>
              {toggle === false ? (
                <button
                  className={styles.button_83}
                  role="button"
                  onClick={handleSwitch}
                >
                  Switch to Convert Roman Numerals to Numbers
                </button>
              ) : (
                <button
                  className={styles.button_83}
                  role="button"
                  onClick={handleSwitch}
                >
                  Switch to Convert Numbers to Roman Numerals
                </button>
              )}
            </div>
            {toggle === false ? (
              <NumToRoman className={styles.formNum} />
            ) : (
              <RomanToNum className={styles.formRoman} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
