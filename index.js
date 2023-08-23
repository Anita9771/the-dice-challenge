// Generate random number from 1 to 6, either method is fine
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let randomNumber2 = Math.round((Math.random() * 5) + 1);

// Select the image to use, either way is fine
let imageOne = document.querySelectorAll("img")[0];

let imageTwo = document.querySelector(".img2");

// Selecting text to display winner
let heading = document.querySelector("h1");

// Dynamically choosing image for player 1 
let imageOneSrc = `./images/dice${randomNumber1}.png`

// Setting attribute for src for players, either way is fine
imageOne.setAttribute("src", imageOneSrc)

if (randomNumber2 === 1) {
    imageTwo.setAttribute("src", "./images/dice1.png");
  } else if (randomNumber2 === 2) {
    imageTwo.setAttribute("src", "./images/dice2.png");
  } else if (randomNumber2 === 3) {
    imageTwo.setAttribute("src", "./images/dice3.png");
  } else if (randomNumber2 === 4) {
    imageTwo.setAttribute("src", "./images/dice4.png");
  } else if (randomNumber2 === 5) {
    imageTwo.setAttribute("src", "./images/dice5.png");
  } else {
    imageTwo.setAttribute("src", "./images/dice6.png");
  }

  function declareWinner(){
    if (randomNumber1 > randomNumber2){
        heading.textContent = "Player 1 wins!"
      } else if (randomNumber1 < randomNumber2){
        heading.textContent = "Player 2 wins!"
      } else {
        heading.textContent = "Draw!"
      }
  }

//   Delay for 1 second before announcing winner
  setTimeout(declareWinner, 1000);

 
  
