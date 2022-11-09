import {p1Destroyer, p1Submarine, p1Cruiser, p1Battleship, p1Carrier} from './global.js'
import { runGame } from './runGame.js'


const checkReady = () => {
    let scoreDiv = document.querySelector('#scoreDiv')
    let uiTxt = document.querySelector('.uiTxt')
    const readyBtnDiv = document.createElement('div')
    const readyBtn = document.createElement('button')
    let shipInventoryDiv = document.querySelector('#shipInventoryDiv')
    readyBtn.setAttribute('id', 'readyBtn')
    readyBtn.textContent = 'Ready'
    readyBtn.addEventListener('click', runGame)

    readyBtnDiv.appendChild(readyBtn)

    if (p1Destroyer.placed == true && p1Submarine.placed == true && p1Cruiser.placed == true && p1Battleship.placed == true && p1Carrier.placed == true) {
        scoreDiv.appendChild(readyBtnDiv)
        uiTxt.textContent = 'Press the ready button to start'
        shipInventoryDiv.classList.add('hidden')
    }
}

export {checkReady}