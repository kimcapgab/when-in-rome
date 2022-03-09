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
            <div className={styles.instructions}>
              {toggle === false ? (
                <div>
                  <h4>
                    This Roman Numeral Converter can be used to convert numbers
                    to Roman Numerals. If you need to convert from Roman
                    Numerals to numbers, please click the button below to make
                    the switch.
                  </h4>
                </div>
              ) : (
                <h4>
                  This Roman Numeral Converter can be used to convert Roman
                  Numerals to numbers. If you need to convert from numbers to
                  Roman Numerals, please click the button below to make the
                  switch.
                </h4>
              )}
            </div>
            <div className={styles.switchButton}>
              {toggle === false ? (
                <button
                  className={styles.button_83}
                  role="button"
                  onClick={handleSwitch}
                >
                  Switch
                </button>
              ) : (
                <button
                  className={styles.button_83}
                  role="button"
                  onClick={handleSwitch}
                >
                  Switch
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
