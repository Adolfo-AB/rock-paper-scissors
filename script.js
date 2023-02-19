const EnemyAnimals = {
    Lion: "lion",
    Eagle: "hawk",
    Bear: "bear"
};

const PlayerAnimals = {
    Badger: "badger",
    Platypus: "platypus",
    Penguin: "penguin"
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function getEnemyAnimal() {
    const animalKeys = Object.keys(EnemyAnimals);
    return EnemyAnimals[animalKeys[Math.floor(Math.random() * animalKeys.length)]];
}

function getPlayerAnimal(button) {
    if (button.classList.contains(PlayerAnimals.Badger)) {
        return PlayerAnimals.Badger;
    }
    else if (button.classList.contains(PlayerAnimals.Platypus)) {
        return PlayerAnimals.Platypus;
    }
    else if (button.classList.contains(PlayerAnimals.Penguin)) {
        return PlayerAnimals.Penguin;
    }
}


function getRoundResults(playerAnimal, enemyAnimal) {
    if (playerAnimal === PlayerAnimals.Platypus) {
        return { 
            text: "You win thanks to the platypus' poisonous claws!",
            playerWins: true
          };
    }
    else if (playerAnimal === PlayerAnimals.Penguin || (playerAnimal == PlayerAnimals.Badger && enemyAnimal === EnemyAnimals.Eagle)) {
        return { 
            text: "You lose!",
            playerWins: false
          };
    }
    else {
        return { 
            text: "You win thanks to the Honey Badger ferociousness!",
            playerWins: true
          };
    }
}

function playRound(button) {
    playerButtons.forEach(button => {
        button.style.backgroundColor = 'gainsboro';
    });
    button.style.backgroundColor = "#90EE90";

    let enemyAnimal = getEnemyAnimal();
    const enemyButton = document.querySelector(`.${enemyAnimal}`);
    const enemyButtons = document.querySelectorAll(".enemy-button");
    enemyButtons.forEach(button => {
        button.style.backgroundColor = 'gainsboro';
    });
    enemyButton.style.backgroundColor = "#F08080";

    const roundResult = getRoundResults(getPlayerAnimal(button), enemyAnimal);
    if (roundResult.playerWins) {
        victories++;
    } else {
        losses++;
    };

    const partialResult = document.querySelector('.partial-result');
    partialResult.textContent = `${roundResult.text}. Wins: ${victories}, Losses: ${losses}`;

    if (victories === 5) {
        const totalResult = document.querySelector('.total-result');
        totalResult.textContent = "You are a WINNER!!!";
        totalResult.style.color = "green";
        disablePlayerButtons();
    }
    if (losses === 5) {
        const totalResult = document.querySelector('.total-result');
        totalResult.textContent = "You are a LOSER!!!";
        totalResult.style.color = "red";
        disablePlayerButtons();
    }

}

function disablePlayerButtons() {
    playerButtons.forEach(button => {
        button.classList.remove('player-button');
        button.disabled = true;
    })
}

let victories = 0;
let losses = 0;

const playerButtons = document.querySelectorAll(".player-button");

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button);
    });
  });