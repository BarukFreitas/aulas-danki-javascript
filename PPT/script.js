document.addEventListener('DOMContentLoaded', function () {
    var playerIcons = document.querySelectorAll('.player-options img');
    var enemyIcons = document.querySelectorAll('.enemy-options img');

    playerIcons.forEach(function (playerIcon) {
        playerIcon.addEventListener('click', function () {
            // Redefine a opacidade de todos os ícones do jogador para baixa
            playerIcons.forEach(function (otherPlayerIcon) {
                otherPlayerIcon.style.opacity = 0.3;
            });

            // Define a opacidade do ícone do jogador clicado para 1
            this.style.opacity = 1;

            // Oponente joga uma opção aleatória
            var randomIndex = Math.floor(Math.random() * enemyIcons.length);
            var enemyChoiceIcon = enemyIcons[randomIndex];

            // Redefine a opacidade de todos os ícones do oponente para baixa
            enemyIcons.forEach(function (otherEnemyIcon) {
                otherEnemyIcon.style.opacity = 0.3;
            });

            // Define a opacidade do ícone do oponente escolhido para 1
            enemyChoiceIcon.style.opacity = 1;

            // Determina o vencedor
            var playerChoice = this.alt;
            var enemyChoice = enemyChoiceIcon.alt;  // Corrigindo aqui
            var result = determineWinner(playerChoice, enemyChoice);

            // Exibe o resultado
            alert('Você escolheu: ' + playerChoice + '\nOponente escolheu: ' + enemyChoice + '\nResultado: ' + result);
        });
    });

    // Função para determinar o vencedor
    function determineWinner(player, enemy) {
        if (player === enemy) {
            return 'Empate';
        } else if (
            (player === 'rock' && enemy === 'scissor') ||
            (player === 'paper' && enemy === 'rock') ||
            (player === 'scissor' && enemy === 'paper')
        ) {
            return 'Você ganhou!';
        } else if (
            (player === 'scissor' && enemy === 'rock') ||
            (player === 'rock' && enemy === 'paper') ||
            (player === 'paper' && enemy === 'scissor')
        ) {
            return 'Oponente ganhou!';
        } else {
            return 'Resultado indefinido';
        }
    }
});
