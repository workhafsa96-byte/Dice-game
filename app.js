const playerDice = document.getElementById("playerDice");

const computerDice = document.getElementById("computerDice");

const playerScore = document.getElementById("playerScore");

const computerScore = document.getElementById("computerScore");

const result = document.getElementById("result");

const rollBtn = document.getElementById("rollBtn");

const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

let userTotal = 0;

let computerTotal = 0;

rollBtn.addEventListener("click", () => {

    // Random Number
    let userRandom = Math.floor(Math.random() * 6);

    let computerRandom = Math.floor(Math.random() * 6);

    // Dice Show
    playerDice.textContent = diceFaces[userRandom];

    computerDice.textContent = diceFaces[computerRandom];

    // Scores
    let userDice = userRandom + 1;

    let computerDiceValue = computerRandom + 1;

    userTotal += userDice;

    computerTotal += computerDiceValue;

    playerScore.textContent = userTotal;

    computerScore.textContent = computerTotal;

    // Winner
    if(userDice > computerDiceValue){

        result.textContent = "🔥 You Win!";

    }
    else if(computerDiceValue > userDice){

        result.textContent = "💻 Computer Wins!";

    }
    else{

        result.textContent = "😎 Draw Match!";

    }

});
