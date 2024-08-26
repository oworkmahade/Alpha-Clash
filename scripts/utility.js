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

// get random alphabet
function getRandomAlphabet() {
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

// addEventListener for capture the pressed key and expected key
// [call back function], when add  one function inline with addEventListener then it is called callback function.

// document.addEventListener("keyup", pressedKey);
document.addEventListener("keyup", function (event) {
  pressedKey(event); // must pass argument at times of using parameter in function
  expectedKey();
});

// get pressed key
function pressedKey(event) {
  const pressedKey = event.key;
  console.log("player pressed:", pressedKey);
}

// get expected key
// document.addEventListener("keyup", expectedKey);
function expectedKey() {
  const expectedKey = document
    .getElementById("display-alphabet")
    .innerText.toLowerCase();
  console.log("expected key:", expectedKey);
}
