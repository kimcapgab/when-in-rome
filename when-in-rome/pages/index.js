import Head from "next/head";
import styles from "../styles/Home.module.css";
import NumToRoman from "../components/forms/NumToRoman";
import RomanToNum from "../components/forms/romanToNum";

export default function Home() {
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
            <NumToRoman className={styles.formNum} />
            <RomanToNum className={styles.formRoman} />
          </div>
        </div>
      </main>
    </div>
  );
}
