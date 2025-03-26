// Seleciona os botões
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// Seleciona os elementos de pontuação
const yourScoreEl = document.querySelector(".your-score span");
const machineScoreEl = document.querySelector(".machine-score span");
const winsMarker = document.querySelector(".wins-marker");

// Variáveis para armazenar pontuações
let yourScore = 0;
let machineScore = 0;

// Opções do jogo
const choices = ["rock", "paper", "scissors"];

// Função para a jogada da máquina
function machinePlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Função para determinar o vencedor
function determineWinner(yourChoice, machineChoice) {
    if (yourChoice === machineChoice) {
        return "Empate! 🤝";
    }

    if (
        (yourChoice === "rock" && machineChoice === "scissors") ||
        (yourChoice === "paper" && machineChoice === "rock") ||
        (yourChoice === "scissors" && machineChoice === "paper")
    ) {
        yourScore++;
        yourScoreEl.textContent = yourScore;
        return "Você venceu! 🎉";
    } else {
        machineScore++;
        machineScoreEl.textContent = machineScore;
        return "Alexa venceu! 🤖";
    }
}

// Função para capturar a escolha do jogador e iniciar o jogo
function playGame(playerChoice) {
    const machineChoice = machinePlay();
    const result = determineWinner(playerChoice, machineChoice);
    winsMarker.textContent = `Você escolheu ${playerChoice.toUpperCase()} - Alexa escolheu ${machineChoice.toUpperCase()} | ${result}`;
}

// Eventos de clique nos botões
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
