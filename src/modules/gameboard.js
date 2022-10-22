

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


    return board
}

export { Gameboard }