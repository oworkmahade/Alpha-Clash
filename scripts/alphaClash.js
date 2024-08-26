function play() {
  // home screen hidden
  hideElementById("home-section");

  //   playground screen show
  showElementById("playground-section");

  //   game started
  startGame();
}

function startGame() {
  // step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();

  //   step-1: display random number on screen
  displayRandomAlphabet(alphabet);

  //   step-2: set background color to displayed alphabet
  setBackgroundColor(alphabet);
}
