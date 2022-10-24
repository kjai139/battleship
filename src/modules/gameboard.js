import { Ship } from "./shipfactory"
function Gameboard() {
    const board = {}
    board.board = []
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

    board.placeShip = (cords, ship) => {
        
        board.board[cords[0]][cords[1]] = ship
        
    }

    board.receiveAttack = (cords) => {
        if (board.board[cords[0]][cords[1]] != 0){
            board.board[cords[0]][cords[1]].hit()
            
        } else if (board.board[cords[0]][cords[1]] == 0) {
            console.log('attack missed')
        }
    }


    return board
}

export { Gameboard }