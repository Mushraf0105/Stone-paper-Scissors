//modular means to make small function for each.
//math.random :- Here we use math.random for generate random value, it defult generate all number between 0 and 1 
//math.floor :- we use it to remove decimal value
//here we use math.random for index value of our array.

let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("Game Draw");
    msg.innerText = "Game Draw..Play Again!";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    // console.log("User Choice = ", userchoice);
    //to generate computer choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if (userchoice == compChoice) {
        //for draw game
        drawGame();
        drawScore++;
        drawScorePara.innerText = drawScore;
    } else {
        let userWin = true;
        if (userchoice == "rock") {
            //paper,scissor
            userWin = compChoice == "paper" ? false : true;
        } else if (userchoice == "paper") {
            //rock,scissor
            userWin = compChoice == "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("Id");
        playGame(userchoice);

    });
});

