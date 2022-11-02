import { checkReady } from "./checkReady"
import { disableBoard, enableBoard } from "./gameFunctions"
import { p1Board, p1Destroyer, p1Battleship, p1Carrier, p1Submarine, p1Cruiser} from "./global"

const placeShipUi = () => {
    const shipUiDiv = document.createElement('div')
    shipUiDiv.setAttribute('id', 'shipUiDiv')

    const shipBtnDiv = document.createElement('div')
    shipBtnDiv.setAttribute('id', 'shipBtnDiv')


    const carrierBtn = document.createElement('button')
    carrierBtn.classList.add('shipBtns')
    carrierBtn.setAttribute('id', 'carrierBtn')
    carrierBtn.style.backgroundImage = 'url(./imgs/carrier.png)'
    carrierBtn.addEventListener('click', placeCarrier)
   

    const battleshipBtn = document.createElement('button')
    battleshipBtn.classList.add('shipBtns')
    battleshipBtn.setAttribute('id', 'battleshipBtn')
    battleshipBtn.style.backgroundImage = 'url(./imgs/battleship.png)'
    battleshipBtn.addEventListener('click', placeBattleship)

    

    const cruiserBtn = document.createElement('button')
    cruiserBtn.classList.add('shipBtns')
    cruiserBtn.setAttribute('id', 'cruiserBtn')
    cruiserBtn.style.backgroundImage = 'url(./imgs/cruiser.png)'
    cruiserBtn.addEventListener('click', placeCruiser)

   

    const submarineBtn = document.createElement('button')
    submarineBtn.classList.add('shipBtns')
    submarineBtn.style.backgroundImage = 'url(./imgs/submarine.png)'
    submarineBtn.setAttribute('id', 'submarineBtn')
    submarineBtn.addEventListener('click', placeSubmarine)

   

    const destroyerBtn = document.createElement('button')
    destroyerBtn.classList.add('shipBtns')
    destroyerBtn.setAttribute('id', 'destroyerBtn')
    destroyerBtn.style.backgroundImage = 'url(./imgs/destroyer.png)'
    destroyerBtn.addEventListener('click', placeDestroyer)
    

    


    shipBtnDiv.appendChild(carrierBtn)
    shipBtnDiv.appendChild(battleshipBtn)
    shipBtnDiv.appendChild(cruiserBtn)
    shipBtnDiv.appendChild(submarineBtn)
    shipBtnDiv.appendChild(destroyerBtn)

    shipUiDiv.appendChild(shipBtnDiv)

    const screenDiv = document.querySelector('#startDiv')
    screenDiv.appendChild(shipUiDiv)

    const shipInventoryDiv = document.createElement('div')
    shipInventoryDiv.setAttribute('id', 'shipInventoryDiv')
    screenDiv.appendChild(shipInventoryDiv)

    //playerboard

    let playerBoard = document.querySelector('#playerBoard')
    
    for (const child of playerBoard.children) {
        child.addEventListener('dragenter', dragEnter)
        child.addEventListener('dragover', dragOver)
        child.addEventListener('dragleave', dragLeave)
        child.addEventListener('drop', drop)
    }
}

const placeDestroyer = () => {
    console.log('destroyerplacement triggered')
    let destroyerContainer = document.createElement('div')
    destroyerContainer.setAttribute('draggable', 'true')
    destroyerContainer.setAttribute('id', 'destroyer-h')

    destroyerContainer.classList.add('destroyerContainer')
    destroyerContainer.classList.add('horizontal')
    let destroyer1 = document.createElement('div')
    let destroyer2 = document.createElement('div')
    destroyer1.classList.add('boardBlocks')
    destroyer1.classList.add('shipBlock')
    destroyer2.classList.add('boardBlocks')
    destroyer2.classList.add('shipBlock')

    destroyerContainer.appendChild(destroyer1)
    destroyerContainer.appendChild(destroyer2)

    const shipInventoryDiv = document.querySelector('#shipInventoryDiv')

    destroyerContainer.addEventListener('dragstart', dragStart)
    destroyerContainer.addEventListener('dragend', dragEnd)
    shipInventoryDiv.appendChild(destroyerContainer)

    let btn = document.querySelector('#destroyerBtn')
    btn.classList.add('disabledBtn')
    btn.setAttribute('disabled', 'true')

}

const placeSubmarine = () => {
    console.log('submarine placement triggered')
    let submarineContainer = document.createElement('div')
    submarineContainer.setAttribute('draggable', 'true')
    submarineContainer.setAttribute('id', 'submarine-h')

    submarineContainer.classList.add('submarineContainer')
    submarineContainer.classList.add('horizontal')
    let submarine1 = document.createElement('div')
    let submarine2 = document.createElement('div')
    let submarine3 = document.createElement('div')
    submarine1.classList.add('boardBlocks')
    submarine1.classList.add('shipBlock')
    submarine2.classList.add('boardBlocks')
    submarine2.classList.add('shipBlock')
    submarine3.classList.add('boardBlocks')
    submarine3.classList.add('shipBlock')

    submarineContainer.appendChild(submarine1)
    submarineContainer.appendChild(submarine2)
    submarineContainer.appendChild(submarine3)

    const shipInventoryDiv = document.querySelector('#shipInventoryDiv')

    submarineContainer.addEventListener('dragstart', dragStart)
    submarineContainer.addEventListener('dragend', dragEnd)
    shipInventoryDiv.appendChild(submarineContainer)

    let btn = document.querySelector('#submarineBtn')
    btn.classList.add('disabledBtn')
    btn.setAttribute('disabled', 'true')

}

const placeCruiser = () => {
    console.log('cruiser placement triggered')
    let cruiserContainer = document.createElement('div')
    cruiserContainer.setAttribute('draggable', 'true')
    cruiserContainer.setAttribute('id', 'cruiser-h')

    cruiserContainer.classList.add('cruiserContainer')
    cruiserContainer.classList.add('horizontal')
    let cruiser1 = document.createElement('div')
    let cruiser2 = document.createElement('div')
    let cruiser3 = document.createElement('div')
    cruiser1.classList.add('boardBlocks')
    cruiser1.classList.add('shipBlock')
    cruiser2.classList.add('boardBlocks')
    cruiser2.classList.add('shipBlock')
    cruiser3.classList.add('boardBlocks')
    cruiser3.classList.add('shipBlock')

    cruiserContainer.appendChild(cruiser1)
    cruiserContainer.appendChild(cruiser2)
    cruiserContainer.appendChild(cruiser3)

    const shipInventoryDiv = document.querySelector('#shipInventoryDiv')

    cruiserContainer.addEventListener('dragstart', dragStart)
    cruiserContainer.addEventListener('dragend', dragEnd)
    shipInventoryDiv.appendChild(cruiserContainer)

    let btn = document.querySelector('#cruiserBtn')
    btn.classList.add('disabledBtn')
    btn.setAttribute('disabled', 'true')

}
const placeBattleship = () => {
    console.log('battleship placement triggered')
    let battleshipContainer = document.createElement('div')
    battleshipContainer.setAttribute('draggable', 'true')
    battleshipContainer.setAttribute('id', 'battleship-h')

    battleshipContainer.classList.add('battleshipContainer')
    battleshipContainer.classList.add('horizontal')
    let battleship1 = document.createElement('div')
    let battleship2 = document.createElement('div')
    let battleship3 = document.createElement('div')
    let battleship4 = document.createElement('div')
    battleship1.classList.add('boardBlocks')
    battleship1.classList.add('shipBlock')
    battleship2.classList.add('boardBlocks')
    battleship2.classList.add('shipBlock')
    battleship3.classList.add('boardBlocks')
    battleship3.classList.add('shipBlock')
    battleship4.classList.add('boardBlocks')
    battleship4.classList.add('shipBlock')

    battleshipContainer.appendChild(battleship1)
    battleshipContainer.appendChild(battleship2)
    battleshipContainer.appendChild(battleship3)
    battleshipContainer.appendChild(battleship4)

    const shipInventoryDiv = document.querySelector('#shipInventoryDiv')

    battleshipContainer.addEventListener('dragstart', dragStart)
    battleshipContainer.addEventListener('dragend', dragEnd)
    shipInventoryDiv.appendChild(battleshipContainer)

    let btn = document.querySelector('#battleshipBtn')
    btn.classList.add('disabledBtn')
    btn.setAttribute('disabled', 'true')

}
const placeCarrier = () => {
    console.log('carrier placement triggered')
    let carrierContainer = document.createElement('div')
    carrierContainer.setAttribute('draggable', 'true')
    carrierContainer.setAttribute('id', 'carrier-h')

    carrierContainer.classList.add('carrierContainer')
    carrierContainer.classList.add('horizontal')
    let carrier1 = document.createElement('div')
    let carrier2 = document.createElement('div')
    let carrier3 = document.createElement('div')
    let carrier4 = document.createElement('div')
    let carrier5 = document.createElement('div')
    carrier1.classList.add('boardBlocks')
    carrier1.classList.add('shipBlock')
    carrier2.classList.add('boardBlocks')
    carrier2.classList.add('shipBlock')
    carrier3.classList.add('boardBlocks')
    carrier3.classList.add('shipBlock')
    carrier4.classList.add('boardBlocks')
    carrier4.classList.add('shipBlock')
    carrier5.classList.add('boardBlocks')
    carrier5.classList.add('shipBlock')

    carrierContainer.appendChild(carrier1)
    carrierContainer.appendChild(carrier2)
    carrierContainer.appendChild(carrier3)
    carrierContainer.appendChild(carrier4)
    carrierContainer.appendChild(carrier5)

    const shipInventoryDiv = document.querySelector('#shipInventoryDiv')

    carrierContainer.addEventListener('dragstart', dragStart)
    carrierContainer.addEventListener('dragend', dragEnd)
    shipInventoryDiv.appendChild(carrierContainer)

    let btn = document.querySelector('#carrierBtn')
    btn.classList.add('disabledBtn')
    btn.setAttribute('disabled', 'true')

}

const dragStart = (e) => {
    setTimeout(() => {
        e.target.classList.add('dragging');
    }, 0);
    

    let shipType = e.target.id.split('-')[0]
    console.log('dragstart', shipType)
    e.dataTransfer.setData('text/plain', shipType)

    let playerBoard = document.querySelector('#playerBoard')
    enableBoard(playerBoard)
}

const dragEnd = (e) => {
    
    e.target.classList.remove('dragging')
    let playerBoard = document.querySelector('#playerBoard')
    disableBoard(playerBoard)
}

//drop target

const dragOver = (e) => {
    e.preventDefault()
    e.target.classList.add('drag-over')
}

const dragEnter = (e) => {
    e.preventDefault()
    e.target.classList.add('drag-over')
}

const dragLeave = (e) => {
    e.target.classList.remove('drag-over')
}

const drop = (e) => {
    e.target.classList.remove('drag-over')
    const shipType = e.dataTransfer.getData('text/plain')
    let firstCord = e.target.id.split('-')[1]
    let secondCord = e.target.id.split('-')[2]
    let cords = [firstCord, secondCord]
    
    console.log('cords', cords)
    console.log('dropped', shipType, 'at', e.target.id)
    if (shipType == 'destroyer') {
        if (p1Board.placeShip(cords, p1Destroyer) != false ) {
            let destroyerPiece = document.querySelector('.destroyerContainer')
            destroyerPiece.remove()
            p1Destroyer.placed = true
        }
        
    } else if (shipType == 'submarine') {
        if (p1Board.placeShip(cords, p1Submarine) != false){
            let submarinePiece = document.querySelector('.submarineContainer')
            submarinePiece.remove()
            p1Submarine.placed = true
        }
        
        
    } else if (shipType == 'cruiser') {
        if (p1Board.placeShip(cords, p1Cruiser) != false){
            let cruiserPiece = document.querySelector('.cruiserContainer')
            cruiserPiece.remove()
            p1Cruiser.placed = true
        }
    } else if (shipType == 'battleship') {
        if (p1Board.placeShip(cords, p1Battleship) != false){
            let battleshipPiece = document.querySelector('.battleshipContainer')
            battleshipPiece.remove()
            p1Battleship.placed = true
        }
    } else if (shipType == 'carrier') {
        if (p1Board.placeShip(cords, p1Carrier) != false){
            let carrierPiece = document.querySelector('.carrierContainer')
            carrierPiece.remove()
            p1Carrier.placed = true
        }
    }
    checkReady()
    let playerBoard = document.querySelector('#playerBoard')
    disableBoard(playerBoard)
}

export {placeShipUi}