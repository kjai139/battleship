const dealDmg = (board, blocks) => {
    if (board.receiveAttack(getCords(blocks)) == true) {
        blocks.classList.remove('unchecked')
        blocks.classList.add('markHit')
        blocks.disabled = true
    } else {
        blocks.classList.remove('unchecked')
        blocks.classList.add('markMiss')
        blocks.disabled = true
    }
}

const getCords = (event) => {
    let cordStr = event.id.split('-')
    let cord = [Number(cordStr[1]),Number(cordStr[2])]
    console.log(cord)
    return cord
    
}



export {dealDmg}