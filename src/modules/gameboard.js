import { Ship } from "./shipfactory"
function Gameboard(name = '') {
    const board = {}
    board.board = []
    board.name = name
    board.createBoard = () => {
        let x = 10

        for (let i = 0; i< x; i++) {
            let row = []
            for (let i = 0;i < x; i++) {
                row.push(0)
            }
            board.board.push(row)
        }

        
    }

    board.placeShip = (cords, ship, position = 'h') => {
        console.log('shiplength', ship.length, ship.position)
        let cordArr = calculateCords(board.board, cords, ship.length)

        if (cordArr){
            cordArr.forEach(cz => {
                console.log(cz, 'cordarray in placeship')
                board.board[cz[0]][cz[1]] = ship
                shipDisplay(board.name, [cz[0],cz[1]])
            });

        } else {
            console.log('invalid placement')
            return false
        }

        

        // board.board[cords[0]][cords[1]] = ship
        // shipDisplay(board.name, [cords[0],cords[1]])
        
    }

    board.receiveAttack = (cords) => {
        if (board.board[cords[0]][cords[1]] != 0){
            board.board[cords[0]][cords[1]].hit()
            board.board[cords[0]][cords[1]].isSunk()
            console.log(board.board)
            return true
            
        } else if (board.board[cords[0]][cords[1]] == 0) {
            console.log('attack missed')
            return false
        }
    }


    return board
}


const shipDisplay = (board, cords ) => {
    let block = document.querySelector(`#${board}-${cords[0]}-${cords[1]}`)
    console.log(`#${board}-${cords[0]}-${cords[1]}`)
    block.classList.add('shipBlock')
}

const calculateCords = (board, startcords, length, pos = 'h') => {
    let arr = []
    let add = 0
    console.log(board[startcords[0]][startcords[1]], 'ccord board', startcords)
    if (board[startcords[0]][startcords[1]] == 0) {
        console.log('pos/room', pos, Number(startcords[0]) + length )
        if (pos == 'h' && Number(startcords[0]) + length <= 10) {
            for (let i = 0; length > i; length--){
                arr.push([[Number(startcords[0]) + add],[startcords[1]]])
                add += 1
            }
            console.log('cCords', arr)
            return arr
        } else {
            
            console.log('not enuf room')
            return false
        }
    } else {
        console.log('invalid block')
        return false
    }
}


export { Gameboard }