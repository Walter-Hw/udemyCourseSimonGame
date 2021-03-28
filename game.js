let buttonColors = ['red', 'blue', 'green', 'yellow'];
let userClickedPattern = [];
let gamePattern = [];
let level = 0;
let started = false;

$(document).on('keypress', () => {

  if (!started) {
    nextSequence();
    $('#level-title').text('Level ' + level);
    started = true;
  }
})

$('.btn').on('click', (e) => {

  let userChosenColor = $(e.currentTarget).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);

})

let nextSequence = () => {

  level++;
  $('#level-title').text('Level ' + level);

  let randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

};

// Helper Function

let playSound = (name) => {

  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();

};

let animatePress = (currentColor) => {

  $(`#${currentColor}`).addClass('pressed');
  setTimeout(() => {
    $(`#${currentColor}`).removeClass('pressed');
  }, 100);

};

// Helper function with tracking the score of game
let checkAnswer = (currentLevel) => {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence()
      }, 1000);
    }
  } else {

    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    $('#level-title').text('Game Over, Press Any Key to Restart');
    startOver();

  }

};

let startOver = () => {

  level = 0;
  gamePattern = [];
  started = false;

}