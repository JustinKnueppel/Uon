import { expect } from "chai"
import Deck from "../src/deck"

describe('Deck', () => {
  it("Class exists", () => {
    expect(Deck).is.not.undefined
  })

  it("Can be instantiated", () => {
    expect(new Deck()).is.not.null
  })

  it("Starts with 108 cards", () => {
    const deck: Deck = new Deck();
    expect(deck.size()).is.not.null;
    expect(deck.size()).to.equal(108)
  })
})
