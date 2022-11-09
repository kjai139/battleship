import { p2Battleship, p2Carrier, p2Cruiser, p2Destroyer, p2Submarine, p1Submarine, p1Battleship, p1Carrier, p1Cruiser, p1Destroyer, p1Board, p2Board } from "./global"
import { startGame } from "./startGame"

const dealDmg = (board, blocks) => {
    let missSound = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg')

    let hitSound = new Audio('https://actions.google.com/sounds/v1/weapons/big_explosion_distant.ogg')

    if (board.receiveAttack(getCords(blocks)) == true) {
        hitSound.play()
        blocks.classList.remove('unchecked')
        blocks.classList.add('markHit')
        blocks.disabled = true
        return true
    } else {
        missSound.play()
        blocks.classList.remove('unchecked')
        blocks.classList.add('markMiss')
        blocks.disabled = true
        return false
    }
}

const getCords = (event) => {
    let cordStr = event.id.split('-')
    let cord = [Number(cordStr[1]),Number(cordStr[2])]
    console.log(cord)
    return cord
    
}

const disableBoard = (board) => {
    board.classList.add('disabledBoard')
}

const enableBoard = (board) => {
    board.classList.remove('disabledBoard')
}

const hideTxt = () => {
    let gameTxt2 = document.querySelector('.gameTxt2')
    gameTxt2.classList.add('hidden')
}

const showTxt = () => {
    let gameTxt2 = document.querySelector('.gameTxt2')
    gameTxt2.classList.remove('hidden')
}

const resetTxt = () => {
    let gameTxt = document.querySelector('.gameTxt')
    let gameTxt2 = document.querySelector('.gameTxt2')
    gameTxt2.textContent = ''
    gameTxt.textContent = ''
}

const checkWinner = (player) => {
    
    if (player.board == 'left') {
        if (p2Submarine.sunk == true && p2Carrier.sunk == true && p2Battleship.sunk == true && p2Cruiser.sunk == true && p2Destroyer.sunk == true) {
            console.log(`${player.name} wins!`)
            createOverlay(player.name)
            return true
        } else {
            return false
        }
    } else if (player.board == 'right') {
        if (p1Submarine.sunk == true && p1Carrier.sunk == true && p1Battleship.sunk == true && p1Cruiser.sunk == true && p1Destroyer.sunk == true) {
            console.log(`${player.name} wins!`)
            createOverlay(player.name)
            return true
        } else {
            return false
        }
    } 
}

const createOverlay = (winner) => {
    let winnerAudio = new Audio('https://actions.google.com/sounds/v1/crowds/battle_crowd_celebration.ogg')

    let overlayDiv = document.createElement('div')
    overlayDiv.classList.add('overlay')

    document.body.appendChild(overlayDiv)

    let overlayGameMenu = document.createElement('div')
    overlayGameMenu.classList.add('overlayGameMenu')

    let overlayBox = document.createElement('div')
    overlayBox.classList.add('overlayBox')


    let overlayTxt = document.createElement('p')
    overlayTxt.classList.add('overlayTxt')

    if (winner == 'p1'){
        overlayTxt.textContent = `Winner:Player 1!`
    } else if (winner == 'p2'){
        overlayTxt.textContent = `Winner:Player 2!`
    }
    winnerAudio.play()
    
    let newGameBtn = document.createElement('button')
    newGameBtn.classList.add('newGameBtn')
    newGameBtn.textContent = 'New game'
    newGameBtn.addEventListener('click', () => {
        winnerAudio.pause()
        winnerAudio.currentTime = 0
        newGame()
    })

    overlayBox.appendChild(overlayTxt)
    overlayBox.appendChild(newGameBtn)
    overlayGameMenu.appendChild(overlayBox)
    
    document.body.appendChild(overlayGameMenu)
}

const newGame = () => {
    let overlay = document.querySelector('.overlay')
    let overlayMenu = document.querySelector('.overlayGameMenu')
    let shipUiDiv = document.querySelector('#shipUiDiv')
    let shipInventoryDiv = document.querySelector('#shipInventoryDiv')

    overlay.remove()
    overlayMenu.remove()
    shipInventoryDiv.remove()
    shipUiDiv.remove()

    p1Board.board = []
    p2Board.board = []

    p1Battleship.dmgTaken = 0
    p1Battleship.sunk = false
    p1Battleship.placed = false

    p1Carrier.dmgTaken = 0
    p1Carrier.sunk = false
    p1Carrier.placed = false

    p1Cruiser.dmgTaken = 0
    p1Cruiser.sunk = false
    p1Cruiser.placed = false
    
    p1Submarine.dmgTaken = 0
    p1Submarine.sunk = false
    p1Submarine.placed = false

    p1Destroyer.dmgTaken = 0
    p1Destroyer.sunk = false
    p1Destroyer.placed = false

    //p2

    p2Battleship.dmgTaken = 0
    p2Battleship.sunk = false
    p2Battleship.placed = false

    p2Carrier.dmgTaken = 0
    p2Carrier.sunk = false
    p2Carrier.placed = false
    
    p2Cruiser.dmgTaken = 0
    p2Cruiser.sunk = false
    p2Cruiser.placed = false
    
    p2Submarine.dmgTaken = 0
    p2Submarine.sunk = false
    p2Submarine.placed = false

    p2Destroyer.dmgTaken = 0
    p2Destroyer.sunk = false
    p2Destroyer.placed = false

    //
    startGame()
}
export {dealDmg, disableBoard, enableBoard, checkWinner, createOverlay, hideTxt, showTxt, resetTxt}