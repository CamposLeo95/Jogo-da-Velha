// DOMContentLoaded serve para executar uma função quando a pagina for carrega

// Carregou a pagina, pega todas os quadrados e adiciona a metodo click que irá executar a função handleClick em cada um dos quadrados-------

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".sqr")


    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})
// -------------------------------------------------------------

// Esta função irá  puxar e adicionar os ID's da div puxados do HTML quando clicar e chamar a função para inserirmos as imagens em cada quadrado que nomeamos como  upDateSquares

function handleClick(event) {

    let square = event.target.id

    if (handleMove(square) == true) {
        setTimeout(() => alert(`O vencedor é o Player ${playerTime + 1}`), 10)
    }
    upDateSquares()
}
//-----------------------------------------------------------

// Esta função é responsavel por inserir os dados(reto e gato) em cada quadrado  
function upDateSquares() {

    let squares = document.querySelectorAll(".sqr")

    squares.forEach(sqr => {
        // como o interface.js é carregado após o o game.js nos conseguimos puxar o bord do outro file.js
        let symbol = board[sqr.id]

        if (symbol != '') {
            sqr.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
//--------------------------------------------------------------


function reset() {

    // Neste caso a função MAP não foi muito util pois há poucos itens no array, porem utilizei para praticar o MAP.

    // let bdReset = board.map((item) => {
    //     item = ''
    //     return item
    // })
    // board = bdReset

    //Creio que neste caso a melhor opção seria utilizar uma atribuição do mesmo numero de itens que o array porem com o valor vazio como abaixo.
    board = ['', '', '', '', '', '', '', '', '',]
    gameOver = false
    playerTime = 0

    let squares = document.querySelectorAll(".sqr")

    squares.forEach(sqr => {
        let symbol = board
        if (symbol != '') {
            sqr.innerHTML = ''
        }
    })
}

