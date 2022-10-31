import { Gameboard } from "./gameboard"
import { Ship } from "./shipfactory"

let currentTurn = 'Player'

let p1Board = Gameboard('playerBoard')
let p2Board = Gameboard('npcBoard')

let p1Destroyer = Ship(2)

let p1Submarine = Ship(3)
p1Submarine.name = 'submarine'

let p1Cruiser = Ship(3)
p1Cruiser.name = 'cruiser'

let p1Battleship = Ship(4)

let p1Carrier = Ship(5)

export {currentTurn, p1Board, p2Board, p1Destroyer, p1Submarine, p1Cruiser, p1Battleship, p1Carrier}