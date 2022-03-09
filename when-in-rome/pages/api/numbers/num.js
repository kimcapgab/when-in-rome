import roman from "/int_to_roman.json";

export default function convert(req, res) {
  let num = req;
  let result = [];

  roman.forEach(function (convert) {
    while (num >= convert[1] && num < 1001) {
      result.push(convert[0]);
      num -= convert[1];
    }
    return result.join("");
  });
  return result.join("");
}
