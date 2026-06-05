let cards = []
let gameFinished

function swap (i, j) {
  let tmp = cards[i]
  cards[i] = cards[j]
  cards[j] = tmp
}

function shuffleCards (cardNumber) {
  cards = []
  for (let i = 1; i <= cardNumber; i++) {
    console.log('pic' + i)
    cards.push('' + i)
    cards.push('' + i)
  }

  for (let i = cards.length - 1; i >= 0; i--) {
    let pos = Math.floor(Math.random() * i)
    swap(i, pos)
  }
}

function displayCards (level) {
  let cardNumber = level == 1 ? 3 : level == 2 ? 8 : 15
  let rows = level == 1 ? 2 : level == 2 ? 4 : 5
  let cols = level == 1 ? 3 : level == 2 ? 4 : 6
  shuffleCards(cardNumber)
  let cnt = 0
  for (let i = 1; i <= rows; i++) {
    let row = '.r' + i
    for (let j = 1; j <= cols; j++) {
      $(row + ' .' + j)
        .addClass('picture-card-' + cards[cnt])
        .attr('card', cards[cnt++])
    }
  }

  $('.picture-card').addClass('hidden')
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

function createCardGrid (level) {
  let rows, cols
  switch (level) {
    case 1:
      rows = 2
      cols = 3
      break

    case 2:
      rows = 4
      cols = 4
      break

    case 3:
      rows = 5
      cols = 6
      break
  }

  let table = $('<table>')
  for (let i = 1; i <= rows; i++) {
    let row = $('<tr>').addClass('r' + i)
    for (let j = 1; j <= cols; j++) {
      row.append(
        $('<td>').append(
          $('<div>')
            .addClass('picture-card')
            .addClass('' + j)
        )
      )
    }
    table.append(row)
  }

  $('.picture-grid').append(table)
}

function classicGame () {
  let steps = 0
  let picBlocked = false
  let firstOpened = false
  let secondOpened = false
  let first, second

  $('#span-mode-info').text('Broj koraka: ')
  $('#span-mode').text(steps)

  $('.picture-card').click(function () {
    if (picBlocked) return
    if (!$(this).hasClass('hidden')) return

    console.log($(this).attr('card'))
    if (!firstOpened) {
      firstOpened = true
      $(this).toggleClass('hidden')
      first = $(this)
    } else {
      steps++
      $('#span-mode').text(steps)
      $(this).toggleClass('hidden')
      second = $(this)
      if (first.attr('card') == second.attr('card')) {
        firstOpened = false
      } else {
        picBlocked = true
        setTimeout(() => {
          picBlocked = false
          first.toggleClass('hidden')
          second.toggleClass('hidden')
          firstOpened = false
        }, 750)
      }
    }
  })
}

function gamePageHandler () {
  let level = parseInt(localStorage.getItem('level'))
  let mode = localStorage.getItem('mode')
  console.log(level + '\n' + mode)

  createCardGrid(level)
  displayCards(level)

  $('#span-level').text(level == 1 ? 'Lako' : level == 2 ? 'Srednje' : 'Tesko')

  if (mode == 'classic') classicGame()

  gameFinished = false
}

$(document).ready(function () {
  if ($('body').hasClass('main-page')) mainPageHandler()
  else if ($('body').hasClass('game-page')) gamePageHandler()
})
