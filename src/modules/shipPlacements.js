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
    destroyerBtn.style.backgroundImage = 'url(./imgs/destroyer.png)'

    


    shipBtnDiv.appendChild(carrierBtn)
    shipBtnDiv.appendChild(battleshipBtn)
    shipBtnDiv.appendChild(cruiserBtn)
    shipBtnDiv.appendChild(submarineBtn)
    shipBtnDiv.appendChild(destroyerBtn)

    shipUiDiv.appendChild(shipBtnDiv)

    const screenDiv = document.querySelector('#startDiv')
    screenDiv.appendChild(shipUiDiv)
}


export {placeShipUi}