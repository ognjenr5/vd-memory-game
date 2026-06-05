let cards = []
let gameStarted = false

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

function mainPageHandler () {
  $('button.mode').click(function () {
    if ($(this).hasClass('selected-mode')) return
    $('button.mode').toggleClass('selected-mode')
  })

  $('#start').click(function () {
    localStorage.setItem('level', parseInt($('#lvl').find(':selected').val()))
    localStorage.setItem('mode', (mode = $('.selected-mode').attr('id')))
    window.location.href = './game.html'
  })
}

function gamePageHandler () {
  displayCards()

  let level = parseInt(localStorage.getItem('level'))
  let mode = localStorage.getItem('mode')

  gameStarted = true

  console.log(level + '\n' + mode)
}

$(document).ready(function () {
  if ($('body').hasClass('main-page')) mainPageHandler()
  else if ($('body').hasClass('game-page')) gamePageHandler()
})
