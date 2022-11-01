function Ship(len, dmgTaken=0, sunk=false, pos='h'){
    
    const ship = {}
    ship.length = len
    ship.dmgTaken = dmgTaken
    ship.sunk = sunk
    ship.name = ''
    ship.position = pos
    ship.placed = false

    ship.hit = (num = 1) => {
        console.log(`${ship} has been hit!`)
        return ship.dmgTaken += num
    }

    ship.isSunk = () => {
        if (ship.dmgTaken >= ship.length){
            console.log(`${ship} has sunk!`)
            return ship.sunk = true
        } else {
            console.log(`ship dmg: ${ship.dmgTaken}/${ship.length}`)
            return ship.sunk = false
        }
    }


    return ship
}


export {Ship}