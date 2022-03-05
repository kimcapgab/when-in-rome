import { useState } from "react";
import convert from "./../../pages/api/numbers/num";
import classes from "./Form.module.css";

export default function NumToRoman() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNum(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await convert(num);
    setResult(res);
  };

  return (
    <section className={classes.container}>
      <form className={classes.formGrid}>
        <p className={classes.title}>Convert a Number into a Roman Numeral</p>
        <input
          className={classes.userInput}
          value={num}
          name="num"
          onChange={handleChange}
        />
        <div className={classes.userButton}>
          <button className={classes.buttonConvert} onClick={handleSubmit}>
            Convert
          </button>
        </div>
        <div className={classes.userResult}>
          <h2 className={classes.resultText}>{result}</h2>
        </div>
      </form>
    </section>
  );
}
