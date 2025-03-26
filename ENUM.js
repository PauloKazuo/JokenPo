/* UTILIZANDO O METODO DA AULA*/

const ENUM = {
    ROCK: 'pedra',
    PAPER: 'papel',
    SCISSORS: 'tesoura'
}

const rockBtn = document.getElementById(ENUM.ROCK);
const paperBtn = document.getElementById(ENUM.PAPER);
const scissorsBtn = document.getElementById(ENUM.SCISSORS);
const yourScoreEl = document.querySelector(".your-score span");
const machineScoreEl = document.querySelector(".machine-score span");
const winsMarker = document.querySelector(".wins-marker");
const resultMarker = document.querySelector(".result-marker");

let yourScore = 0;
let machineScore = 0;

function humanPlay(humanChoice) {
    const machineChoice = machinePlay();
    const result = playTheGame(humanChoice, machineChoice);
    resultMarker.innerHTML = `| ${result} |`;
    winsMarker.innerHTML = `Você escolheu ${humanChoice.toUpperCase()} - Alexa escolheu ${machineChoice.toUpperCase()} `;
}

function machinePlay() {
    const choices = [ENUM.ROCK, ENUM.PAPER, ENUM.SCISSORS];
    const randomNumber = Math.floor(Math.random() * choices.length);

    return choices[randomNumber];
}

function playTheGame(human, machine) {
    console.log("humano " + human, "maquina " + machine);

    if (human === machine) {
        return "Deu empate! 🤝"
    }
    else if (
        (human === ENUM.ROCK && machine === ENUM.SCISSORS) ||
        (human === ENUM.PAPER && machine === ENUM.ROCK) ||
        (human === ENUM.SCISSORS && machine === ENUM.PAPER)
    ) {
        yourScore++;
        yourScoreEl.innerHTML = yourScore;
        return "<span style='color: rgb(77, 128, 216);'>Você venceu!</span> 🎉"
    }
    else {
        machineScoreEl.innerHTML = ++machineScore;
        return "<span style='color: rgb(224, 71, 15);'>A Alexa venceu!</span> 🤖"
    }
}


rockBtn.addEventListener("click", () => humanPlay(ENUM.ROCK));
paperBtn.addEventListener("click", () => humanPlay(ENUM.PAPER));
scissorsBtn.addEventListener("click", () => humanPlay(ENUM.SCISSORS));
