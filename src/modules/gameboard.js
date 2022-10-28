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
        console.log('shiplength', ship.length)
        let cordArr = calculateCords(board.board, cords, ship.length)

        //incomplete function to place cords
        cordArr.forEach(element => {
            console.log(element)
        });

        board.board[cords[0]][cords[1]] = ship
        shipDisplay(board.name, [cords[0],cords[1]])
        
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
    let add = 1
    console.log(board[startcords[0]][startcords[1]], 'ccord board', startcords)
    if (board[startcords[0]][startcords[1]] == 0) {
        if (pos == 'h' && startcords[1] + length <= 9) {
            for (let i = 1; length > i; length--){
                arr.push([[startcords[0]],[startcords[1] + add]])
                add += 1
            }
            console.log('cCords', arr)
            return arr
        } else {
            console.log('not enuf room')
        }
    } else {
        console.log('invalid block')
    }
}


export { Gameboard }