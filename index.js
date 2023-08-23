let randomNumber1 = Math.round(Math.random() * 5 + 1);
let randomNumber2 = Math.round(Math.random() * 5 + 1);
let imageOne = document.querySelector(".img1");
let imageTwo = document.querySelector(".img2");
let heading = document.querySelector("h1");

// alert(`${randomNumber1} and ${randomNumber2}`);

if (randomNumber1 === 1) {
  imageOne.setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
  imageOne.setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
  imageOne.setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
  imageOne.setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
  imageOne.setAttribute("src", "./images/dice5.png");
} else {
  imageOne.setAttribute("src", "./images/dice6.png");
}

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

  setTimeout(declareWinner, 1000);

 
  
