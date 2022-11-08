import { disableBoard, enableBoard } from "./gameFunctions"
import { p1Board, p2Board, currentTurn, player1 } from "./global"
import {npcMove, npcPlaceShips} from "./npcAi"

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
    // console.log(curTurn.type, 'curturn type')
    

    let p2B = document.querySelector('#npcBoard')
    let p1B = document.querySelector('#playerBoard')
    let rightArrow = document.querySelector('#playerArrow')
    let leftArrow = document.querySelector('#npcArrow')
    

    if (curTurn.name == 'p1') {
        rightArrow.classList.remove('hidden')
        leftArrow.classList.add('hidden')
        uiTxt.textContent = `Player 1's Turn to attack`
        enableBoard(p2B)
        
    } else if (curTurn.name == 'p2') {
        if (curTurn.type == 'npc') {
            console.log('npc script')
            rightArrow.classList.add('hidden')
            leftArrow.classList.remove('hidden')
        
            uiTxt.textContent = `NPC's Turn to attack`
            disableBoard(p2B)
            enableBoard(p1B)

            npcMove(curTurn)

        } else {

        }
    }
}

export {runGame, startTurn}