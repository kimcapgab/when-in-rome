import roman from "/int_to_roman.json"

export default function convert(req, res) {
  let { num } = req.query
  let result = []
  roman.forEach(function (convert) {
    while (num >= convert[1]) {
      result.push(convert[0])
      num -= convert[1]
    }
    return result.join('')
    
  })
  console.log(result.join(''))
  res.status(200).json(result)
}
