import { Gameboard } from "./gameboard"
import { Ship } from "./shipfactory"

const startGame = () => {
    let screenDiv = document.querySelector('#screenDiv')
    screenDiv.textContent = ''

    let testBoard = Gameboard()
    testBoard.createBoard()
    console.log(testBoard.board, 'before')



    let cords = [3,0]
    let cords2 = [4, 6]
    let smallShip = Ship(2)

    testBoard.placeShip(cords, smallShip )
    testBoard.placeShip(cords2, smallShip )
    console.log(testBoard.board)

    displayBoards(testBoard)

}


const displayBoards = (board) => {
    let screenDiv = document.querySelector('#screenDiv')
    let boardContainer = document.createElement('div')
    boardContainer.classList.add('boardContainer')
    let x = 10
    let rows = 0
    while (rows < 10) {
        for (let i = 0; i< x; i++) {
            let blocks = document.createElement('button')
            blocks.classList.add('boardBlocks')
            blocks.setAttribute('id', `${board}-${i}-${rows}`)

            blocks.addEventListener('click', () => board.receiveAttack(getCords(blocks)))

            boardContainer.appendChild(blocks)

            

            
        }
        rows += 1
    }
    screenDiv.appendChild(boardContainer)
    
}


const getCords = (event) => {
    let cordStr = event.id.split('-')
    let cord = [Number(cordStr[1]),Number(cordStr[2])]
    console.log(cord)
    return cord
    
}


export {startGame}