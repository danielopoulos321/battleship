import Ship from "../src/modules/ship";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(4);
  });

  test("initial hits are 0", () => {
    expect(ship.hits).toBe(0);
  });

  test("hit count increases when hit() is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("isSunk() returns false when not hit", () => {
    expect(ship.isSunk()).toBe(false);
  });

  test("isSunk() returns true when hit 4 out of 4 times", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
