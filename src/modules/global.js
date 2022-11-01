import { Gameboard } from "./gameboard"
import { Ship } from "./shipfactory"

let currentTurn = 'Player'

let p1Board = Gameboard('playerBoard')
let p2Board = Gameboard('npcBoard')

let p1Destroyer = Ship(2)
p1Destroyer.name = 'destroyer'

let p1Submarine = Ship(3)
p1Submarine.name = 'submarine'

let p1Cruiser = Ship(3)
p1Cruiser.name = 'cruiser'

let p1Battleship = Ship(4)
p1Battleship.name = 'battleship'

let p1Carrier = Ship(5)
p1Carrier.name = 'carrier'

export {currentTurn, p1Board, p2Board, p1Destroyer, p1Submarine, p1Cruiser, p1Battleship, p1Carrier}