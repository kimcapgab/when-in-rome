import { useState } from "react";
import convert from "./../../pages/api/numbers/num";
import classes from "./Form.module.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function NumToRoman() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [alertUser, setAlertUser] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setNum(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (num > 1000) {
      setResult("");
      setAlertUser(true);
    } else if (num == 0) {
      setResult("");
      setAlertUser(true);
    } else {
      let res = await convert(num);
      setAlertUser(false);
      setResult(res);
    }
  };

  const closeAlert = async (e) => {
    e.preventDefault();
    setAlertUser(false);
  };

  return (
    <>
      <section className={classes.container}>
        <form className={classes.formGrid}>
          <p className={classes.title}>
            Convert a Number 1 - 1000 into a Roman Numeral
          </p>
          <input
            type="number"
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
      <section className={classes.alert}>
        {alertUser === true ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error" onClose={closeAlert}>
              Input is out of range, please enter a number from 1 to 1000.
            </Alert>
          </Stack>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
