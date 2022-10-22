import './style.css'
import { Gameboard } from './modules/gameboard'
import { Ship } from './modules/shipfactory'

let testBoard = Gameboard()
testBoard.createBoard()
console.log(testBoard.board, 'before')



let cords = [3,0]
let cords2 = [4, 6]
let smallShip = Ship(2)

testBoard.placeShip(cords, smallShip )
testBoard.placeShip(cords2, smallShip )
console.log(testBoard.board)
smallShip.hit(4)