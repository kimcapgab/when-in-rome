import roman from "/int_to_roman.json"

export default function handler(req, res) {
  res.status(200).json(roman)
}
