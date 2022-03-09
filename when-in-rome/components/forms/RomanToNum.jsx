import { useState } from "react";
import romanConvert from "../../pages/api/numbers/roman";
import classes from "./Form.module.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function RomanToNum() {
  const [roman, setRoman] = useState("");
  const [answer, setAnswer] = useState("");
  const [alertUser, setAlertUser] = useState(false);

  const handleChangeRoman = (e) => {
    const { value } = e.target;
    setRoman(value);
  };

  const handleSubmitRoman = async (e) => {
    e.preventDefault();
    let res = await romanConvert(roman);
    if (res == 0) {
      setAlertUser(true);
      setAnswer("");
      console.log(res);
    } else {
      setAnswer(res);
      setAlertUser(false);
      console.log(res);
    }
  };

  const closeAlert = async (e) => {
    e.preventDefault();
    setAlertUser(false);
  };

  return (
    <>
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
            <button
              className={classes.buttonConvert}
              onClick={handleSubmitRoman}
            >
              Convert
            </button>
          </div>
          <div className={classes.userResult}>
            <h2 className={classes.resultText}>{answer}</h2>
          </div>
        </form>
      </section>
      <section className={classes.alert}>
        {alertUser === true ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error" onClose={closeAlert}>
              Input is not a Roman Numeral, please enter a Roman Numeral I, IV,
              V, IX, X, XL, L, XC, C, CD, D, CM, or M.
            </Alert>
          </Stack>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
