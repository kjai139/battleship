import './style.css'
import { Gameboard } from './modules/gameboard'
import { Ship } from './modules/shipfactory'
import { startGame } from './modules/startGame'



const startGameBtn = document.querySelector('#startGameBtn')
startGameBtn.addEventListener('click', startGame)


// testBoard.receiveAttack(cords)
// console.log(testBoard.board)