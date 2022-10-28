import { Gameboard } from "./gameboard"
import { dealDmg } from "./gameFunctions"
import { currentTurn } from "./global"
import { Ship } from "./shipfactory"

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

            blocks.addEventListener('click', () => {
                
                dealDmg(board, blocks)
            })

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
    arrowImg.setAttribute('id', 'playerArrow')
    arrowImg.setAttribute('src', './svgs/right_arrow.svg')
    arrowDiv1.appendChild(arrowImg)

    const turnTxtDiv = document.createElement('div')
    const turnTxt = document.createElement('p')
    turnTxt.classList.add('uiTxt')
    turnTxt.textContent = `${currentTurn}'s turn`
    turnTxtDiv.appendChild(turnTxt)

    const arrowDiv2 = document.createElement('div')
    const arrowImg2 = document.createElement('img')
    arrowImg2.setAttribute('id', 'npcArrow')
    arrowImg2.setAttribute('src', './svgs/left_arrow.svg')
    arrowDiv2.appendChild(arrowImg2)

    scoreDiv.appendChild(arrowDiv1)
    scoreDiv.appendChild(turnTxtDiv)
    scoreDiv.appendChild(arrowDiv2)

    gameBoardDiv.appendChild(scoreDiv)


}






const createGame = () => {
    let p1Board = Gameboard('playerBoard')
    p1Board.createBoard()
    

    let p2Board = Gameboard('npcBoard')
    p2Board.createBoard()
    


    //p1ships
    let smallShip1 = Ship(2) 
    let smallShip2 = Ship(2)


    
    p1Board.placeShip([3, 1], smallShip1)
    p1Board.placeShip([3, 2], smallShip1)

    p1Board.placeShip([0, 0], smallShip2)
    p1Board.placeShip([0, 1], smallShip2)
    
    

    //p2ships

    let p2sub1 = Ship(2)

    p2Board.placeShip([0,0], p2sub1)
    p2Board.placeShip([1,0], p2sub1)
    displayBoards(p1Board)
    displayScoreBoard()
    displayBoards(p2Board)
}


export {startGame}