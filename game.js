let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];

let nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
};

$('btn').on('click', () => {
  let uesrChosenColor = $(this).attr('id');
  userClickedPattern.push(uesrChosenColor);
  playSound(uesrChosenColor);
})

let playSound = (name) => {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

let animatePress = (currentColor) => {
  $(`#${currentColor}`).addClass('pressed');
  setTimeOut(() => {
    $(`#${currentColor}`).removeClass('pressed');
  }, 100);
}
