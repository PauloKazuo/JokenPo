// Seleciona os botões
const rockBtn = document.getElementById("pedra");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("tesoura");

// Seleciona os elementos de pontuação
const yourScoreEl = document.querySelector(".your-score span");
const machineScoreEl = document.querySelector(".machine-score span");
const resultMarker = document.querySelector(".result-marker");
const winsMarker = document.querySelector(".wins-marker");

// Seleciona o elemento da contagem regressiva
const countdownEl = document.getElementById("countdown");

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
        return "Empate! 🤝";
    }

    if (
        (yourChoice === "pedra" && machineChoice === "tesoura") ||
        (yourChoice === "papel" && machineChoice === "pedra") ||
        (yourChoice === "tesoura" && machineChoice === "papel")
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
        // Reseta o texto do placar para evitar exibição imediata
        winsMarker.textContent = "";
        countdownEl.textContent = "3...";  // Começa a contagem com "3"
        
        let count = 3; // Começamos a contagem no número 3
    
        // Criamos um intervalo que atualiza o número a cada 1 segundo
        const countdown = setInterval(() => {
            count--;
            if (count > 0) {
                countdownEl.textContent = count + "..."; // Atualiza para 2, depois 1...
            } else {
                clearInterval(countdown); // Para a contagem ao chegar no 0
                countdownEl.textContent = ""; // Esconde a contagem
    
                // Agora, executamos o jogo normalmente
                const machineChoice = machinePlay();
                const result = determineWinner(playerChoice, machineChoice);
                resultMarker.textContent = `| ${result} |`;
                winsMarker.textContent = `Você escolheu ${playerChoice.toUpperCase()} - Alexa escolheu ${machineChoice.toUpperCase()}`;
            }
        }, 1000); // A cada 1000ms (1 segundo), a contagem diminui
}

// Eventos de clique nos botões
rockBtn.addEventListener("click", () => playGame("pedra"));
paperBtn.addEventListener("click", () => playGame("papel"));
scissorsBtn.addEventListener("click", () => playGame("tesoura"));
