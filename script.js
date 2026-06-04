let cards = []

function swap (i, j) {
  let tmp = cards[i]
  cards[i] = cards[j]
  cards[j] = tmp
}

function shuffleCards () {
  cards = []
  for (let i = 1; i <= 8; i++) {
    cards.push('pic' + i)
    cards.push('pic' + i)
  }

  for (let i = 15; i >= 0; i--) {
    let pos = Math.floor(Math.random() * i)
    swap(i, pos)
  }
}

function displayCards () {
  shuffleCards()
  let cnt = 0
  for (let i = 1; i <= 4; i++) {
    let row = '.r' + i
    for (let j = 1; j <= 4; j++) {
      $(row + ' .' + j).css(
        'background-image',
        "url('./img/" + cards[cnt++] + ".png')"
      )
    }
  }
}

$(document).ready(function () {
  displayCards()
})
