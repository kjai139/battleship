import { Gameboard } from "./gameboard"
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
    let x = 10
    let rows = 0
    while (rows < 10) {
        for (let i = 0; i< x; i++) {
            let blocks = document.createElement('button')
            blocks.classList.add('boardBlocks')
            blocks.classList.add('unchecked')
            blocks.setAttribute('id', `${board}-${i}-${rows}`)

            blocks.addEventListener('click', () => {
                
                if (board.receiveAttack(getCords(blocks)) == true) {
                    blocks.classList.remove('unchecked')
                    blocks.classList.add('markHit')
                    blocks.disabled = true
                } else {
                    blocks.classList.remove('unchecked')
                    blocks.classList.add('markMiss')
                    blocks.disabled = true
                }
            })

            boardContainer.appendChild(blocks)

            

            
        }
        rows += 1
    }
    gameBoardDiv.appendChild(boardContainer)
    
}




const getCords = (event) => {
    let cordStr = event.id.split('-')
    let cord = [Number(cordStr[1]),Number(cordStr[2])]
    console.log(cord)
    return cord
    
}

const createGame = () => {
    let p1Board = Gameboard()
    p1Board.createBoard()
    // console.log(p1Board, 'p1b4')

    let p2Board = Gameboard()
    p2Board.createBoard()
    // console.log(p2Board, 'p2b4' )


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
    displayBoards(p1Board)
    displayBoards(p2Board)
}


export {startGame}