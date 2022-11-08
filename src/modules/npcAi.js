import { p2Battleship, p2Board, p2Carrier, p2Destroyer, p2Submarine, p2Cruiser } from "./global"

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


//npc ship placements

const npcPlaceShips = () => {
    npcPlaceDestroyer()
    npcPlaceSubmarine()
    npcPlaceCruiser()
    npcPlaceBattleship()
    npcPlaceCarrier()
}


const npcPlaceDestroyer = () => {
    let randomCords = chooseRandom()
    let randomDirection = Math.floor(Math.random() * 2)

    if (randomDirection == 1) {
        p2Destroyer.position = 'v'
    } else if (randomDirection == 0) {
        p2Destroyer.position = 'h'
    }

    if (p2Board.placeShip(randomCords, p2Destroyer) == false) {
        console.log('falty placement npc destroyer')
        return npcPlaceDestroyer()
    }

}
const npcPlaceSubmarine = () => {
    let randomCords = chooseRandom()
    let randomDirection = Math.floor(Math.random() * 2)

    if (randomDirection == 1) {
        p2Submarine.position = 'v'
    } else if (randomDirection == 0) {
        p2Submarine.position = 'h'
    }

    if (p2Board.placeShip(randomCords, p2Submarine) == false) {
        console.log('falty placement npc sub')
        return npcPlaceSubmarine()
    }

}

const npcPlaceCruiser = () => {
    let randomCords = chooseRandom()
    let randomDirection = Math.floor(Math.random() * 2)

    if (randomDirection == 1) {
        p2Cruiser.position = 'v'
    } else if (randomDirection == 0) {
        p2Cruiser.position = 'h'
    }

    if (p2Board.placeShip(randomCords, p2Cruiser) == false) {
        console.log('falty placement npc cruiser')
        return npcPlaceCruiser()
    }

}

const npcPlaceBattleship = () => {
    let randomCords = chooseRandom()
    let randomDirection = Math.floor(Math.random() * 2)

    if (randomDirection == 1) {
        p2Battleship.position = 'v'
    } else if (randomDirection == 0) {
        p2Battleship.position = 'h'
    }

    if (p2Board.placeShip(randomCords, p2Battleship) == false) {
        console.log('falty placement npc battleship')
        return npcPlaceBattleship()
    }

}

const npcPlaceCarrier = () => {
    let randomCords = chooseRandom()
    let randomDirection = Math.floor(Math.random() * 2)

    if (randomDirection == 1) {
        p2Carrier.position = 'v'
    } else if (randomDirection == 0) {
        p2Carrier.position = 'h'
    }

    if (p2Board.placeShip(randomCords, p2Carrier) == false) {
        console.log('falty placement npc carrier')
        return npcPlaceCarrier()
    }

}

export {npcMove, npcPlaceShips}