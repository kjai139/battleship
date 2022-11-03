const npcMove = (player) => {
    let randomCords = chooseRandom()
    
    let target = document.querySelector(`#playerBoard-${randomCords[0]}-${randomCords[1]}`)

    if (player.prevHit) {
        let lastMoveSplit = player.lastMove.split('-')
        let lastMoveX = Number(lastMoveSplit[1])
        let lastMoveY = Number(lastMoveSplit[2])

        let errorCount = 0

        let nextMove = findNextMove(lastMoveX, lastMoveY)
        console.log(nextMove)

        while (checkIfValidMove(nextMove) == false){
            errorCount += 1
            console.log('errorcount', errorCount, lastMoveX, lastMoveY)
            nextMove = findNextMove(lastMoveX, lastMoveY)
            console.log('newmove generated', nextMove)
            if (errorCount > 4){
                break
            }
        } 
        //find new random move
        if (errorCount > 4) {
            while (checkIfValidMove(randomCords) == false) {
                randomCords = chooseRandom()
            }
    
            target = document.querySelector(`#playerBoard-${randomCords[0]}-${randomCords[1]}`)
            target.click()

        } else {
            let newTarget = document.querySelector(`#playerBoard-${nextMove[0]}-${nextMove[1]}`)

            newTarget.click()
        }

       
    } else {
        while (checkIfValidMove(randomCords) == false) {
            randomCords = chooseRandom()
        }

        target = document.querySelector(`#playerBoard-${randomCords[0]}-${randomCords[1]}`)
        target.click()
    }

    

}


const chooseRandom = () => {
    let randomX = Math.floor(Math.random() * 10)
    let randomY = Math.floor(Math.random() * 10)
    let randomCords = [randomX, randomY]

    return randomCords
}

const findNextMove = (x, y) => {
    let randomDirection = Math.floor(Math.random() * 4) + 1
    let nextMove
    if (randomDirection == 1) {
        nextMove = [x, y - 1]
    } else if (randomDirection == 2) {
        nextMove = [x, y + 1]
    } else if (randomDirection == 3) {
        nextMove = [x - 1, y]
    } else if (randomDirection == 4) {
        nextMove = [x + 1, y]
    }
    
    return nextMove


}

const checkIfValidMove = (move) => {
    if (move[0] > 9 || move[0] < 0 || move[1] > 9 || move[1] < 0) {
        console.log('out of board')
        return false
    }
    let target = document.querySelector(`#playerBoard-${move[0]}-${move[1]}`)

    if (target.classList.contains('unchecked')) {
        return true
    } else {
        return false
    }

}

export {npcMove}