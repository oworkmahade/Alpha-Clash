// hide section
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// show section
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// create random alphabet
function createRandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   random number generator for random choose index
  const randNumber = Math.random() * 25;
  const index = Math.round(randNumber);
  //   use random number for random array index set
  const alphabet = alphabets[index];
  //   when there is a function there should be a return
  return alphabet;
}

// display random alphabet

function displayRandomAlphabet(alphabet) {
  const disAlphabet = document.getElementById("display-alphabet");
  disAlphabet.innerText = alphabet;
}

// set alphabet background color

function setBackgroundColor(elementId) {
  const alphabetColor = document.getElementById(elementId);
  //   alphabetColor.classList.add("bg-orange-500");
  alphabetColor.classList.add("bg-key");
}

// key press and magic
// addEventListener for capture the pressed key and expected key
// [call back function], when add  one function inline with addEventListener then it is called callback function.

// document.addEventListener("keyup", pressedKey);
document.addEventListener("keyup", function (event) {
  const pressedKeyVal = pressedKey(event); // must pass argument at times of using parameter in function
  const expectedKeyVal = expectedKey();

  console.log(pressedKeyVal);

  // ESC key press for game over
  if (pressedKeyVal === "Escape") {
    gameOver();
  }
  // score
  if (pressedKeyVal === expectedKeyVal) {
    // start a new round
    continueGame();
    removeBackgroundColor(pressedKeyVal);

    // update score
    //.......................................................................
    // 1.get the current score
    // const elementId = document.getElementById("score-value");
    // const currentScore = parseInt(elementId.innerText);

    // 2.increase the score by 1
    // const updatedScore = currentScore + 1;

    // 3.display the updated score
    // elementId.innerText = updatedScore;
    //........................................................................

    // ** using reusable function
    const currentScore = getCurrentValueById("score-value");
    const updatedScore = currentScore + 1;
    setUpdatedValueById("score-value", updatedScore);
  }
  // life
  else {
    // update life
    //........................................................................
    // 1.get the current life
    // const elementId = document.getElementById("life-value");
    // const currentLife = parseInt(elementId.innerText);
    // 2.reduce the life by 1
    // const updatedLife = currentLife - 1;
    // 3.display the updated life
    // elementId.innerText = updatedLife;
    //........................................................................

    // ** using reusable function
    const currentLife = getCurrentValueById("life-value");
    const updatedLife = currentLife - 1;
    setUpdatedValueById("life-value", updatedLife);

    // game exit
    // final score
    // condition for game end
    if (updatedLife === 0) {
      gameOver();
    }
  }
});

// get pressed key
function pressedKey(event) {
  const pressedKey = event.key;
  return pressedKey;
}

// get expected key
// document.addEventListener("keyup", expectedKey);
function expectedKey() {
  const expectedKey = document
    .getElementById("display-alphabet")
    .innerText.toLowerCase();
  return expectedKey;
}

// remove alphabet background color
function removeBackgroundColor(elementId) {
  const alphabetColor = document.getElementById(elementId);
  alphabetColor.classList.remove("bg-key");
}

// * reusable function of getting life - score current value
function getCurrentValueById(elementId) {
  const currentValue = parseInt(document.getElementById(elementId).innerText);
  return currentValue;
}

// * reusable function of displaying life - score updated value
function setUpdatedValueById(id, value) {
  const elementId = document.getElementById(id);
  elementId.innerText = value;
}

// get text element from artboard
// note: here we may use getCurrentValueById() but for parseInt function it is not possible
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId).innerText;
  return element;
}
