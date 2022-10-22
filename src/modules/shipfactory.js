function Ship(len, dmgTaken=0, sunk=false){
    
    const ship = {}
    ship.length = len
    ship.dmgTaken = dmgTaken
    ship.sunk = sunk

    ship.hit = (num = 1) => {
        return ship.dmgTaken += num
    }

    ship.isSunk = () => {
        if (ship.dmgTaken >= ship.length){
            return ship.sunk = true
        } else {
            return ship.sunk = false
        }
    }


    return ship
}


export {Ship}