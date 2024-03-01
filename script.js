let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
};

const showWinner = (usrWin,userChoice,compChoice) => {
   if (usrWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText= `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
   }
   else{
    computerScore++;
    compScorePara.innerText=computerScore;
  
    msg.innerText= `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
   }
}

const drawGame = ()=>{
   
    msg.innerText= "Game was Draw.Play Again";
    msg.style.backgroundColor="#081b31";
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    // Generate Computer choices
    const compChoice = genCompChoice();
   

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let usrWin= true;
        if(userChoice=== "rock"){
            // scissors, paper
          usrWin= compChoice === "paper" ? false : true;
        }

        if(userChoice=== "paper"){
            // rock, scissors
          usrWin= compChoice === "scissors" ? false : true;
        }

        if(userChoice=== "scissors"){
            // rock, paper
          usrWin= compChoice === "rock" ? false : true;
        }
        showWinner(usrWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click",()=> {
    const userChoice= choice.getAttribute("id")
    playGame(userChoice);
  });
});