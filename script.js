// Seleciona os botões
const rockBtn = document.getElementById("pedra");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("tesoura");
const resetBtn = document.querySelector(".reset-button");

// Seleciona os elementos de pontuação
const yourScoreEl = document.querySelector(".your-score span");
const machineScoreEl = document.querySelector(".machine-score span");
const resultMarker = document.querySelector(".result-marker");
const playerRound = document.querySelector(".player-round");
const machineRound = document.querySelector(".machine-round");


// Variáveis para armazenar pontuações
let yourScore = 0;
let machineScore = 0;

// Opções do jogo
const choices = ["pedra", "papel", "tesoura"];

// Função para a jogada da máquina
function machinePlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Função para determinar o vencedor
function determineWinner(yourChoice, machineChoice) {
    if (yourChoice === machineChoice) {
        return "<span style='color: rgb(101, 223, 8);'>Empate!</span> 🤝";
    }

    if (
        (yourChoice === "pedra" && machineChoice === "tesoura") ||
        (yourChoice === "papel" && machineChoice === "pedra") ||
        (yourChoice === "tesoura" && machineChoice === "papel")
    ) {
        yourScore++;
        yourScoreEl.innerHTML = yourScore;
        return "<span style='color: rgb(77, 128, 216);'>Você venceu!</span> 🎉";
    } else {
        machineScore++;
        machineScoreEl.innerHTML = machineScore;
        return "<span style='color: rgb(224, 71, 15);'>Alexa venceu!</span> 🤖";
    }
}

// Função para capturar a escolha do jogador e iniciar o jogo

function playGame(playerChoice) {
    // Reseta o texto do placar para evitar exibição imediata
    resultMarker.innerHTML = "";
    playerRound.innerHTML = "";
    machineRound.innerHTML = "";
    // Agora, executamos o jogo normalmente
    const machineChoice = machinePlay();
    const result = determineWinner(playerChoice, machineChoice);
    resultMarker.innerHTML = `| ${result} |`;
    playerRound.innerHTML = `Você escolheu: <span style='color: rgb(77, 128, 216);'>${playerChoice.toUpperCase()}</span>`;
    machineRound.innerHTML = `Alexa escolheu: <span style='color: rgb(224, 71, 15);'>${machineChoice.toUpperCase()}</span>`;
}

function startCountdown(playerChoice) {
    // Seleciona o elemento da contagem regressiva
    const countdownEl = document.getElementById("countdown");
    const countdownMask = document.querySelector(".countdown-mask");

    // Mostra a máscara com fade-in
    countdownMask.classList.add("show");
    countdownEl.innerHTML = "3";

    setTimeout(() => {
        countdownEl.innerHTML = "2";
    }, 1000);

    setTimeout(() => {
        countdownEl.innerHTML = "1";
    }, 2000);

    setTimeout(() => {
        countdownEl.innerHTML = ""; // Limpa a contagem
        countdownMask.classList.remove("show"); // Faz o fade-out na máscara

        setTimeout(() => {
            playGame(playerChoice); // Agora executamos o jogo
        }, 500); // Esperamos 0.5s para garantir que a máscara desapareça antes de mostrar o resultado
    }, 3000);
    
}


// Eventos de clique nos botões
rockBtn.addEventListener("click", () => startCountdown("pedra"));
paperBtn.addEventListener("click", () => startCountdown("papel"));
scissorsBtn.addEventListener("click", () => startCountdown("tesoura"));
resetBtn.addEventListener("click", () => {
    yourScore = 0;
    machineScore = 0;
    yourScoreEl.innerHTML = yourScore;
    machineScoreEl.innerHTML = machineScore;
    resultMarker.innerHTML = `O placar foi reiniciado!<br> Vamos jogar de novo? 🎮`;
    playerRound.innerHTML = "";
    machineRound.innerHTML = "";
});
