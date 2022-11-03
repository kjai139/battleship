import { Gameboard } from "./gameboard"
import { dealDmg, disableBoard } from "./gameFunctions"
import { currentTurn, player2, player1 } from "./global"
import { Ship } from "./shipfactory"
import { placeShipUi } from "./shipPlacements"
import { p1Board, p2Board } from "./global"
import { startTurn } from "./runGame"

const startGame = () => {
    let screenDiv = document.querySelector('#screenDiv')
    screenDiv.textContent = ''

    let gameBoardDiv = document.createElement('div')
    gameBoardDiv.setAttribute('id', 'gameBoardDiv')
    screenDiv.appendChild(gameBoardDiv)

    createGame()

}


const displayBoards = (board) => {
    let gameBoardDiv = document.querySelector('#gameBoardDiv')
    let boardContainer = document.createElement('div')
    boardContainer.classList.add('boardContainer')
    boardContainer.setAttribute('id', `${board.name}`)
    let x = 10
    let rows = 0
    while (rows < 10) {
        for (let i = 0; i< x; i++) {
            let blocks = document.createElement('button')
            blocks.classList.add('boardBlocks')
            blocks.classList.add('unchecked')
            blocks.setAttribute('id', `${board.name}-${i}-${rows}`)
            if (board.name == 'npcBoard') {
                blocks.addEventListener('click', () => {
                
                    if (dealDmg(board, blocks)) {
                        player1.prevHit = true
                        player1.lastMove = [i, rows]
                        console.log('prev hit',player1.lastMove, player1.prevHit)
                    } else {
                        player1.prevHit = false
                        player1.lastMove = ''
                        console.log('prev miss', player1.lastMove, player1.prevHit)
                    }
                    startTurn(player2)
                })

            } else if (board.name == 'playerBoard') {
                blocks.addEventListener('click', () => {
                
                    if (dealDmg(board, blocks)) {
                        player2.prevHit = true
                        player2.lastMove = blocks.id
                        console.log('prev hit',player2.lastMove, player2.prevHit)
                    } else {
                        player2.prevHit = false
                        player2.lastMove = ''
                        console.log('prev miss', player2.lastMove, player2.prevHit)
                    }
                    startTurn(player1)
                })
            }
            

            boardContainer.appendChild(blocks)

            

            
        }
        rows += 1
    }
    gameBoardDiv.appendChild(boardContainer)
    
}

const displayScoreBoard = () => {
    const gameBoardDiv = document.querySelector('#gameBoardDiv')
    const scoreDiv = document.createElement('div')
    scoreDiv.setAttribute('id', 'scoreDiv')

    const arrowDiv1 = document.createElement('div')
    const arrowImg = document.createElement('img')
    arrowDiv1.setAttribute('id', 'playerArrow')
    arrowImg.setAttribute('src', './svgs/right_arrow.svg')
    arrowDiv1.appendChild(arrowImg)
    
    arrowDiv1.classList.add('hidden')

    const turnTxtDiv = document.createElement('div')
    const turnTxt = document.createElement('p')
    turnTxt.classList.add('uiTxt')
    turnTxt.textContent = `Place your ships`
    turnTxtDiv.appendChild(turnTxt)

    const arrowDiv2 = document.createElement('div')
    const arrowImg2 = document.createElement('img')
    arrowDiv2.setAttribute('id', 'npcArrow')
    arrowImg2.setAttribute('src', './svgs/left_arrow.svg')
    arrowDiv2.appendChild(arrowImg2)

    scoreDiv.appendChild(arrowDiv1)
    scoreDiv.appendChild(turnTxtDiv)
    scoreDiv.appendChild(arrowDiv2)

    gameBoardDiv.appendChild(scoreDiv)


}






const createGame = () => {

    p1Board.createBoard()
    

    
    p2Board.createBoard()
    
    
    displayBoards(p1Board)
    displayScoreBoard()
    displayBoards(p2Board)
    placeShipUi()

    let playerBoard = document.querySelector('#playerBoard')
    let player2Board = document.querySelector('#npcBoard')

    disableBoard(playerBoard)
    disableBoard(player2Board)

    
}




export {startGame}