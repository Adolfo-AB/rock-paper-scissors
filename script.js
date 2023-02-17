const Weapons = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors"
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getComputerChoice() {
    const weaponKeys = Object.keys(Weapons);
    return Weapons[weaponKeys[Math.floor(Math.random() * weaponKeys.length)]];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Both players chose ${playerSelection}.`
    }
    else if ((playerSelection === Weapons.Rock && computerSelection === Weapons.Scissors) || 
                (playerSelection === Weapons.Scissors && computerSelection === Weapons.Paper) ||
                (playerSelection === Weapons.Paper && computerSelection === Weapons.Rock)) {
        return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}.`
    }
    else {
        return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}.`
    }
}

function showGameResult(playerVictories, computerVictories) {
    if (playerVictories > computerVictories) {
        alert("You won!");
    }
    else if (playerVictories < computerVictories) {
        alert("You lost!");
    }
    else {
        alert("It's a tie!")
    }
}

function game() {
    let playerVictories = 0;
    let computerVictories = 0;
    for (let i=0; i<5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose your weapon (rock, paper or scissors)!").toLowerCase();

        let result = playRound(playerSelection, computerSelection);
        
        if (result.includes("win")) {
            playerVictories++;
        }
        else if (result.includes("lose")) {
            computerVictories++;
        }

        alert(`${result} Player victories: ${playerVictories}, Computer victories: ${computerVictories}`);
    }

    showGameResult(playerVictories, computerVictories);
    
}

computerSelection = getComputerChoice();
playerSelection = getComputerChoice();

game();
