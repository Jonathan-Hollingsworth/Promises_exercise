let deckID
let drawURL

const $button = $("button")
const $drawn = $("#drawn")

axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
  .then(deck => {
    deckID = deck.data.deck_id
    drawURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw`
  })
  .catch(err => {
    console.log(err)
  })

$button.on("click", function() {
    axios.get(drawURL)
      .then(draw => {
        const $newImage = $(`<img src="${draw.data.cards[0].image}">`)
        $drawn.append($newImage)
        if (draw.data.remaining <= 0) {
            $button.remove()
        }
      })
})