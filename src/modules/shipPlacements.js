const placeShipUi = () => {
    const shipUiDiv = document.createElement('div')
    shipUiDiv.setAttribute('id', 'shipUiDiv')

    const shipBtnDiv = document.createElement('div')
    shipBtnDiv.setAttribute('id', 'shipBtnDiv')


    const carrierBtn = document.createElement('button')
    carrierBtn.classList.add('shipBtns')
    carrierBtn.style.backgroundImage = 'url(./imgs/carrier.png)'
   

    const battleshipBtn = document.createElement('button')
    battleshipBtn.classList.add('shipBtns')
    battleshipBtn.style.backgroundImage = 'url(./imgs/battleship.png)'

    

    const cruiserBtn = document.createElement('button')
    cruiserBtn.classList.add('shipBtns')
    cruiserBtn.style.backgroundImage = 'url(./imgs/cruiser.png)'

   

    const submarineBtn = document.createElement('button')
    submarineBtn.classList.add('shipBtns')
    submarineBtn.style.backgroundImage = 'url(./imgs/submarine.png)'

   

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

const placeDestroyer = (obj) => {
    console.log('destroyerplacement triggered')
    let destroyerContainer = document.createElement('div')
    destroyerContainer.setAttribute('draggable', 'true')
    destroyerContainer.setAttribute('id', 'destroyer-h')

    destroyerContainer.classList.add('destroyerContainer')
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

const dragStart = (e) => {
    setTimeout(() => {
        e.target.classList.add('dragging');
    }, 0);
    

    let shipType = e.target.id.split('-')[0]
    console.log('dragstart', shipType)
    e.dataTransfer.setData('text/plain', shipType)
}

const dragEnd = (e) => {
    e.target.classList.remove('dragging')
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
    console.log('dropped', shipType, 'at', e.target.id)
}

export {placeShipUi}