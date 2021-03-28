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