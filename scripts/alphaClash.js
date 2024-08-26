// game start
function play() {
  // playground screen show
  showElementById("playground-section");
  // home screen hidden
  hideElementById("home-section");
  hideElementById("score");
  // game started
  continueGame();

  // ......................................
  // reset life value to 5
  setUpdatedValueById("life-value", 5);
  // reset score value 0
  setUpdatedValueById("score-value", 0);
}

// game continue
function continueGame() {
  // step-1: generate a random alphabet
  const alphabet = createRandomAlphabet();

  //   step-1: display random number on screen
  displayRandomAlphabet(alphabet);

  //   step-2: set background color to displayed alphabet
  setBackgroundColor(alphabet);
}

// game over
function gameOver() {
  // playground layout hide
  // reusable function
  hideElementById("playground-section");

  // final score layout display
  // reusable function
  showElementById("score");

  // display final score
  const score = document.getElementById("score-value").innerText;
  setUpdatedValueById("final-score", score);

  // clear the last selected alphabet
  const selectedAlphabet = getTextElementValueById("display-alphabet");
  removeBackgroundColor(selectedAlphabet);
}
