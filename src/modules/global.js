import { Gameboard } from "./gameboard"
import { Ship } from "./shipfactory"
import {Players} from "./player.js"

let currentTurn

let player1 = new Players('p1')
let player2 = new Players('p2')

player2.type = 'npc'

player1.board = 'left'
player2.board = 'right'

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

// p2 ships

let p2Destroyer = Ship(2)
p2Destroyer.name = 'destroyer'

let p2Submarine = Ship(3)
p2Submarine.name = 'submarine'

let p2Cruiser = Ship(3)
p2Cruiser.name = 'cruiser'

let p2Battleship = Ship(4)
p2Battleship.name = 'battleship'

let p2Carrier = Ship(5)
p2Carrier.name = 'carrier'

export {currentTurn, p1Board, p2Board, p1Destroyer, p1Submarine, p1Cruiser, p1Battleship, p1Carrier, player1, player2, p2Battleship, p2Carrier, p2Cruiser, p2Destroyer, p2Submarine}