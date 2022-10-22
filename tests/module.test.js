
import { Ship } from "../src/modules/shipfactory"


it('create a Carrier with length of 5', () => {
    let carrier1 = Ship(5)
    expect(carrier1.length).toEqual(5)
})

it('ship hit function taking damage of 1', () => {
    let carrier1 = Ship(5)
    carrier1.hit()
    expect(carrier1.dmgTaken).toEqual(1)
})

