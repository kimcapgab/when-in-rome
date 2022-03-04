import romanNums from "/int_to_roman.json";

export default function romanConvert(req, res) {
  // "IX"
  let roman = req;
  // ['I', 'X']
  const romanArray = roman.split("");
  console.log(romanArray);

  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  function findRoman(x) {
    let found = romanNums.find(([key]) => key === x);
    console.log(found);
    return found;
  }

  // let i = 0; i < 2; i++
  for (let i = 0; i < romanArray.length; i++) {
    // current = "I"
    current = romanArray[i];
    // console.log(current);
    // next = "V"
    next = romanArray[i + 1];
    // console.log(next);

    currentValue = findRoman(current)[1];
    // console.log(currentValue);
    nextValue = findRoman(next);
    // console.log(nextValue);

    if (currentValue < nextValue) {
      total += nextValue - currentValue;
    } else {
      total += currentValue;
    }
    console.log(total);
  }
  console.log(total);
  return total;
}
