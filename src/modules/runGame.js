import { enableBoard } from "./gameFunctions"
import { p1Board, p2Board, currentTurn, player1 } from "./global"


const runGame = (p1, p2) => {
    let uiTxt = document.querySelector('.uiTxt')
    

    let p2B = document.querySelector('#npcBoard')
    let rightArrow = document.querySelector('#playerArrow')
    let leftArrow = document.querySelector('#npcArrow')
    let rdyBtn = document.querySelector('#readyBtn')

    rdyBtn.classList.add('hidden')

    startTurn(player1)
    
}

const startTurn = (curTurn) => {
    let uiTxt = document.querySelector('.uiTxt')
    

    let p2B = document.querySelector('#npcBoard')
    let rightArrow = document.querySelector('#playerArrow')
    let leftArrow = document.querySelector('#npcArrow')
    

    if (curTurn.name == 'p1') {
        rightArrow.classList.remove('hidden')
        leftArrow.classList.add('hidden')
        uiTxt.textContent = `Player 1's Turn to attack`
        enableBoard(p2B)
        
    } else if (curTurn.name == 'p2') {
        if (curTurn.type == 'npc') {

        }
    }
}

export {runGame}