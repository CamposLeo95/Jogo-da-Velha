let board = ['', '', '', '', '', '', '', '', '',];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

let playWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

// esta função é responsavel por inserir os o player dentro do board para ('o' ou 'x') e ir alternando entre os dois para sabermos de quem é a vez de jogar

function handleMove(square) {

    if (gameOver) {
        return;
    }

    if (board[square] == '') {
        board[square] = symbols[playerTime]

        gameOver = win();
        
// mesma coisa que (gameOver == false) = (!gameOver)
        if (!gameOver) {
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }
    return gameOver

}

// função utlizada para informarmos se o gameOver é true or false baseado nas condições de vitorias inseridas no array playWin

let win = function isWin() {

    for (let i = 0; i < playWin.length; i++) {
        let seq = playWin[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {

            return true
        }
    }
    return false
}


