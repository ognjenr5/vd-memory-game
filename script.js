let cards = []
let gameFinished
let scoreboardTimeHard = [
  { user: 'AAA', score: 0 },
  { user: 'BBB', score: 0 },
  { user: 'CCC', score: 0 },
  { user: 'DDD', score: 0 },
  { user: 'EEE', score: 0 },
  { user: 'FFF', score: 0 },
  { user: 'GGG', score: 0 },
  { user: 'HHH', score: 0 },
  { user: 'III', score: 0 },
  { user: 'JJJ', score: 0 }
]

let scoreboardTimeMedium = [
  { user: 'AAA', score: 0 },
  { user: 'BBB', score: 0 },
  { user: 'CCC', score: 0 },
  { user: 'DDD', score: 0 },
  { user: 'EEE', score: 0 },
  { user: 'FFF', score: 0 },
  { user: 'GGG', score: 0 },
  { user: 'HHH', score: 0 },
  { user: 'III', score: 0 },
  { user: 'JJJ', score: 0 }
]

let scoreboardTimeEasy = [
  { user: 'AAA', score: 0 },
  { user: 'BBB', score: 0 },
  { user: 'CCC', score: 0 },
  { user: 'DDD', score: 0 },
  { user: 'EEE', score: 0 },
  { user: 'FFF', score: 0 },
  { user: 'GGG', score: 0 },
  { user: 'HHH', score: 0 },
  { user: 'III', score: 0 },
  { user: 'JJJ', score: 0 }
]

let scoreboardStepsHard = [
  { user: 'AAA', score: 999 },
  { user: 'BBB', score: 999 },
  { user: 'CCC', score: 999 },
  { user: 'DDD', score: 999 },
  { user: 'EEE', score: 999 },
  { user: 'FFF', score: 999 },
  { user: 'GGG', score: 999 },
  { user: 'HHH', score: 999 },
  { user: 'III', score: 999 },
  { user: 'JJJ', score: 999 }
]

let scoreboardStepsMedium = [
  { user: 'AAA', score: 999 },
  { user: 'BBB', score: 999 },
  { user: 'CCC', score: 999 },
  { user: 'DDD', score: 999 },
  { user: 'EEE', score: 999 },
  { user: 'FFF', score: 999 },
  { user: 'GGG', score: 999 },
  { user: 'HHH', score: 999 },
  { user: 'III', score: 999 },
  { user: 'JJJ', score: 999 }
]

let scoreboardStepsEasy = [
  { user: 'AAA', score: 999 },
  { user: 'BBB', score: 999 },
  { user: 'CCC', score: 999 },
  { user: 'DDD', score: 999 },
  { user: 'EEE', score: 999 },
  { user: 'FFF', score: 999 },
  { user: 'GGG', score: 999 },
  { user: 'HHH', score: 999 },
  { user: 'III', score: 999 },
  { user: 'JJJ', score: 999 }
]

function loadScoreBoard () {
  let _scoreboardTimeHard = localStorage.getItem('scoreboardTimeHard')
  if (_scoreboardTimeHard != null) {
    scoreboardTimeHard = JSON.parse(_scoreboardTimeHard)
  } else
    localStorage.setItem(
      'scoreboardTimeHard',
      JSON.stringify(scoreboardTimeHard)
    )

  let _scoreboardTimeMedium = localStorage.getItem('scoreboardTimeMedium')
  if (_scoreboardTimeMedium != null) {
    scoreboardTimeMedium = JSON.parse(_scoreboardTimeMedium)
  } else
    localStorage.setItem(
      'scoreboardTimeMedium',
      JSON.stringify(scoreboardTimeMedium)
    )

  let _scoreboardTimeEasy = localStorage.getItem('scoreboardTimeEasy')
  if (_scoreboardTimeEasy != null) {
    scoreboardTimeEasy = JSON.parse(_scoreboardTimeEasy)
  } else
    localStorage.setItem(
      'scoreboardTimeEasy',
      JSON.stringify(scoreboardTimeEasy)
    )

  let _scoreboardStepsHard = localStorage.getItem('scoreboardStepsHard')
  if (_scoreboardStepsHard != null) {
    scoreboardStepsHard = JSON.parse(_scoreboardStepsHard)
  } else
    localStorage.setItem(
      'scoreboardStepsHard',
      JSON.stringify(scoreboardStepsHard)
    )

  let _scoreboardStepsMedium = localStorage.getItem('scoreboardStepsMedium')
  if (_scoreboardStepsMedium != null) {
    scoreboardStepsMedium = JSON.parse(_scoreboardStepsMedium)
  } else
    localStorage.setItem(
      'scoreboardStepsMedium',
      JSON.stringify(scoreboardStepsMedium)
    )

  let _scoreboardStepsEasy = localStorage.getItem('scoreboardStepsEasy')
  if (_scoreboardStepsEasy != null) {
    scoreboardStepsEasy = JSON.parse(_scoreboardStepsEasy)
  } else
    localStorage.setItem(
      'scoreboardStepsEasy',
      JSON.stringify(scoreboardStepsEasy)
    )
}

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
    let lvl = parseInt($('#lvl').find(':selected').val())
    let mode = $('.selected-mode').attr('id');
    console.log("lvl: " + lvl + ", " + "mode: " + mode)
    window.location.href = `./game.html?level=${lvl}&mode=${mode}`
  })

  $('#openScores').click(function () {
    let lvl = parseInt($('#lvl').find(':selected').val())
    let mode = $('.selected-mode').attr('id');
     window.location.href = `./score.html?level=${lvl}&mode=${mode}`
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

function classicGame (level) {
  let steps = 0
  let picBlocked = false
  let firstOpened = false
  let secondOpened = false
  let first, second
  let cardCount = level == 1 ? 3 : level == 2 ? 8 : 15
  let currCards = 0

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
        currCards++
        if (cardCount == currCards) {
          gameEnd(true, steps, 'classic')
        }
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

function timedGame (level) {
  let timeSeconds = level == 1 ? 15 : level == 2 ? 90 : 180
  let waitTime = timeSeconds * 1000;
  let picBlocked = false
  let firstOpened = false
  let secondOpened = false
  let first, second
  let cardCount = level == 1 ? 3 : level == 2 ? 8 : 15
  let currCards = 0

  $('#span-mode-info').text('Vreme: ')
  $('#span-mode').text(
    parseInt(Math.floor(timeSeconds / 60)) +
      ':' +
      ('0' + (timeSeconds % 60)).slice(-2)
  )

  let interval = setInterval(function () {
    timeSeconds--
    $('#span-mode').text(
      parseInt(Math.floor(timeSeconds / 60)) +
        ':' +
        ('0' + (timeSeconds % 60)).slice(-2)
    )
  }, 1000)

  let timeout = setTimeout(function () {
    clearInterval(interval)
    gameEnd(false, null, null)
    console.log('Game finished: ' + gameFinished)
  }, waitTime)

  $('.picture-card').click(function () {
    if (picBlocked || gameFinished) return
    if (!$(this).hasClass('hidden')) return

    if (!firstOpened) {
      firstOpened = true
      $(this).toggleClass('hidden')
      first = $(this)
    } else {
      $(this).toggleClass('hidden')
      second = $(this)
      if (first.attr('card') == second.attr('card')) {
        firstOpened = false
        currCards++
        if (cardCount == currCards) {
          clearInterval(interval)
          clearTimeout(timeout)
          gameEnd(true, timeSeconds, 'timed')
        }
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

function gameEnd (hasWon, score, scoreType) {
  gameFinished = true
  $('.end-game').toggleClass('hidden-end')
  $('#playAgainDiv').css('display', '')
  if (hasWon) {
    $('.status-game').text('Pobedili ste!')
    $('.add-score').text('Upišite ime u tabelu?')
    $('#addScoreDiv').css('display', '')

    $('#addToScore').click(function () {
      // loadScoreBoard()
      // addScore(newScore, scoreType == 'timed')

      let user = $('#name').val()
      let level = localStorage.getItem("level")
      let mode = localStorage.getItem("mode")

      window.location.href = `./score.html?level=${level}&mode=${mode}&user=${user}&score=${score}`
    })
  } else {
    $('.status-game').text('Izgubili ste!')
    $('#addScoreDiv').css('display', 'none')
  }

  $('#playAgain').click(function () {
    location.reload()
  })

  $('#returnToStart').click(function () {
    window.location.href = './index.html'
  })
}

function gamePageHandler () {
  let params = new URLSearchParams(window.location.search)
  let level = parseInt(params.get('level'))
  let mode = params.get('mode')
  console.log(level + '\n' + mode)

  localStorage.setItem("level", level)
  localStorage.setItem("mode", mode)

  createCardGrid(level)
  displayCards(level)

  $('#span-level').text(level == 1 ? 'Lako' : level == 2 ? 'Srednje' : 'Teško')

  gameFinished = false
  if (mode == 'classic') classicGame(level)
  else timedGame(level)
}

function getBoardForScore (isTime) {
  if (isTime) {
    switch (localStorage.getItem('level')) {
      case '1':
        return scoreboardTimeEasy

      case '2':
        return scoreboardTimeMedium

      case '3':
        return scoreboardTimeHard
    }
  } else {
    switch (localStorage.getItem('level')) {
      case '1':
        return scoreboardStepsEasy

      case '2':
        return scoreboardStepsMedium

      case '3':
        return scoreboardStepsHard
    }
  }
}

function saveBoard (isTime) {
  if (isTime) {
    switch (localStorage.getItem('level')) {
      case '1':
        return localStorage.setItem(
          'scoreboardTimeEasy',
          JSON.stringify(scoreboardTimeEasy)
        )

      case '2':
        return localStorage.setItem(
          'scoreboardTimeMedium',
          JSON.stringify(scoreboardTimeMedium)
        )

      case '3':
        return localStorage.setItem(
          'scoreboardTimeHard',
          JSON.stringify(scoreboardTimeHard)
        )
    }
  } else {
    switch (localStorage.getItem('level')) {
      case '1':
        return localStorage.setItem(
          'scoreboardStepsEasy',
          JSON.stringify(scoreboardStepsEasy)
        )

      case '2':
        return localStorage.setItem(
          'scoreboardStepsMedium',
          JSON.stringify(scoreboardStepsMedium)
        )

      case '3':
        return localStorage.setItem(
          'scoreboardStepsHard',
          JSON.stringify(scoreboardStepsHard)
        )
    }
  }
}

function addScore (score, isTime) {
  let board = getBoardForScore(isTime)
  let i = 0
  while (
    i < board.length &&
    ((isTime && board[i].score >= score.score) ||
      (!isTime && board[i].score <= score.score))
  )
    i++
  if (i == board.length) return
  for (let j = board.length - 1; j > i; j--) board[j] = board[j - 1]
  board[i] = score
  saveBoard(isTime)
}

function displayScores (scores, isTime) {
  let count = 0
  let table = $('.scoreboard table')
  scores.forEach(row => {
    let tr = $('<tr>')
    let pos = $('<td>')
      .addClass('position')
      .text(++count + '.')
    let name = $('<td>').addClass('name').text(row.user)
    let sc = $('<td>')
      .addClass('score-res')
      .text(
        isTime
          ? parseInt(Math.floor(row.score / 60)) +
              ':' +
              ('0' + (row.score % 60)).slice(-2)
          : row.score
      )
    tr.append(pos).append(name).append(sc)
    table.append(tr)
  })
}

function scorePageHandler () {
  let params = new URLSearchParams(window.location.search)
  localStorage.setItem("level", parseInt(params.get('level')))
  localStorage.setItem("mode", params.get('mode'))

  loadScoreBoard()

  if (params.has('user') && params.has('score')) {
    let newScore = {
      user: params.get('user'),
      score: parseInt(params.get('score'))
    }
    addScore(newScore, localStorage.getItem('mode') == 'timed')
    window.name = ''
  }

  if (localStorage.getItem('mode') == 'timed')
    displayScores(getBoardForScore(true), true)
  else displayScores(getBoardForScore(false), false)

  $('#returnToStart').click(function () {
    window.location.href = './index.html'
  })
}

$(document).ready(function () {
  if ($('body').hasClass('main-page')) mainPageHandler()
  else if ($('body').hasClass('game-page')) gamePageHandler()
  else scorePageHandler()
})
