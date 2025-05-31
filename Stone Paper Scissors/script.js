//Practise
// let userScore = 0;
// let compScore = 0;
// let value = 0;
// let selectRock = document.querySelector(".choices").querySelector("#rock");
// let selectPaper = document.querySelector(".choices").querySelector("#paper");
// let selectScissors = document.querySelector(".choices").querySelector("#scissors");
// let random = Math.floor(Math.random() * 3)+1;
// let userScorePara = document.querySelector("#user-score");
// let compScorePara = document.querySelector("#comp-score");
// let msg = document.querySelector("#msg");

// let rock = selectRock.addEventListener("click", () =>{
//     value = 0;
//     random = Math.floor(Math.random() * 3) + 1;
//     if(random === 2){
//         msg.innerText = "You lost!!, Paper beats Rock";
//         msg.style.backgroundColor = "red";
//         compScore++;
//         compScorePara.innerText = compScore;
//     }
//     else if(random == 1){
//         msg.innerText = "The Result is Draw!!!";
//         msg.style.backgroundColor = "#081b31";
//     }
//     else if(random === 3){
//         msg.innerText = "You won!!, Rock beats scissors";
//         msg.style.backgroundColor = "green";
//         userScore++;
//         userScorePara.innerText = userScore;
//     }
// });
        
        
// let paper = selectPaper.addEventListener("click", () =>{
//     value = 0;
//     random = Math.floor(Math.random() * 3) + 1;
//     if(random === 3){
//         msg.innerText = "You lost!!, Scissors beats Papers";
//         msg.style.backgroundColor = "red";
//         compScore++;
//         compScorePara.innerText = compScore;
//     }
//     else if(random == 2){
//         msg.innerText = "The Result is Draw!!!";
//         msg.style.backgroundColor = "#081b31";
//     }
//     else if(random === 1){
//         msg.innerText = "You won!!, Paper beats Rock";
//         msg.style.backgroundColor = "green";
//         userScore++;
//         userScorePara.innerText = userScore;
//     }
// });

// let scissors = selectScissors.addEventListener("click", () =>{
//     value = 0;
//     random = Math.floor(Math.random() * 3) + 1;
//     if(random === 1){
//         msg.innerText = "You lost!!, Rock beats Scissors";
//         msg.style.backgroundColor = "red";
//         compScore++;
//         compScorePara.innerText = compScore;
//     }
//     else if(random == 1){
//         msg.innerText = "The Result is Draw!!!";
//         msg.style.backgroundColor = "#081b31";
//     }
//     else if(random === 2){
//         msg.innerText = "You won!!, Scissors beats Paper";
//         msg.style.backgroundColor = "green";
//         userScore++;
//         userScorePara.innerText = userScore;
//     }
// });



let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

