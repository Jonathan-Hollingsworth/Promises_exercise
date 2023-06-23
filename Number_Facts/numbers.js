const $h1 = $("h1")
const $ul = $("ul")
const $ol = $("ol")

const RANDNUM = Math.floor(Math.random()*365) + 1
$h1.text(RANDNUM)

const BASEURL = `http://numbersapi.com/${RANDNUM}`

axios.get(`${BASEURL}/trivia?json`)
  .then(fact => {
    const $newLI = $("<li>")
    $newLI.text(`Trivia: ${fact.data.text}`)
    $ul.append($newLI)
    return axios.get(`${BASEURL}/year?json`)
  })
  .then(fact => {
    const $newLI = $("<li>")
    $newLI.text(`Year: ${fact.data.text}`)
    $ul.append($newLI)
    return axios.get(`${BASEURL}/date?json`)
  })
  .then(fact => {
    const $newLI = $("<li>")
    $newLI.text(`Date: ${fact.data.text}`)
    $ul.append($newLI)
    return axios.get(`${BASEURL}/math?json`)
  })
  .then(fact => {
    const $newLI = $("<li>")
    $newLI.text(`Math: ${fact.data.text}`)
    $ul.append($newLI)
  })
  .catch(err => {
    console.log(err)
  })

axios.get('http://numbersapi.com/1,2,3,4,5/trivia?json')
  .then(facts => {
    const $newLI1 = $("<li>")
    $newLI1.text(facts.data[1])
    $ol.append($newLI1)
    const $newLI2 = $("<li>")
    $newLI2.text(facts.data[2])
    $ol.append($newLI2)
    const $newLI3 = $("<li>")
    $newLI3.text(facts.data[3])
    $ol.append($newLI3)
    const $newLI4 = $("<li>")
    $newLI4.text(facts.data[4])
    $ol.append($newLI4)
    const $newLI5 = $("<li>")
    $newLI5.text(facts.data[5])
    $ol.append($newLI5)
  })
  .catch(err => {
    console.log(err)
  })