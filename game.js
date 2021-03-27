const gamePattern = [];
const buttonColors = ['red', 'blue', 'green', 'yellow'];

let nextSequence = () => {
  let randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
};
