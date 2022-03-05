import romanNums from "/int_to_roman.json";

export default function romanConvert(req, res) {
  let roman = req;
  const romanArray = roman.split("");

  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  function findRoman(x) {
    let found = romanNums.find(([key]) => key === x);
    if (found === undefined) {
      let value = 0;
      return value;
    } else {
      let value = found[1];
      return value;
    }
  }

  for (let i = 0; i < romanArray.length; i++) {
    current = romanArray[i];
    next = romanArray[i + 1];

    currentValue = findRoman(current);
    nextValue = findRoman(next);

    if (currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}
