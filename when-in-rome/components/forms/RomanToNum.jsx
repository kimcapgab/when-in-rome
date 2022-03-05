import { useState } from "react";
import romanConvert from "../../pages/api/numbers/roman";
import classes from "./Form.module.css";

export default function RomanToNum() {
  const [roman, setRoman] = useState("");
  const [answer, setAnswer] = useState("");

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
    <section className={classes.containerR}>
      <form className={classes.formGrid}>
        <p className={classes.title}>Convert a Roman Numeral into a Number</p>
        <input
          className={classes.userInput}
          value={roman}
          name="roman"
          onChange={handleChangeRoman}
        />
        <div className={classes.userButton}>
          <button onClick={handleSubmitRoman}>Convert</button>
        </div>
        <div className={classes.userResult}>
          <h2 className={classes.resultText}>{answer}</h2>
        </div>
      </form>
    </section>
  );
}
