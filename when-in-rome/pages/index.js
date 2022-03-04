import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import convert from "./api/numbers/num";
import romanConvert from "./api/numbers/roman";

export default function Home() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [roman, setRoman] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNum(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await convert(num);
    console.log(res);
    setResult(res);
  };

  const handleChangeRoman = (e) => {
    const { value } = e.target;
    setRoman(value);
  };

  const handleSubmitRoman = async (e) => {
    e.preventDefault();
    let res = await romanConvert(roman);
    console.log(res);
    setAnswer(res);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>When in Rome</title>
        <meta
          name="description"
          content="Convert numbers to Roman Numerals and vice versa"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>When In Rome</h1>
          <form>
            <p>Convert a Number into a Roman Numeral</p>
            <input value={num} name="num" onChange={handleChange} />
            <button onClick={handleSubmit}>Convert</button>
            <h2>{result}</h2>
          </form>

          <form>
            <p>Convert a Roman Numeral into a Number</p>
            <input value={roman} name="roman" onChange={handleChangeRoman} />
            <button onClick={handleSubmitRoman}>Convert</button>
            <h2>{answer}</h2>
          </form>
        </div>
      </main>
    </div>
  );
}
