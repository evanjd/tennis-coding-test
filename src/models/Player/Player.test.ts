import Player from "./Player";

describe("Player", () => {
  let player: Player;

  beforeEach(() => {
    player = new Player("Player");
  });

  test("wonPoints increments points", () => {
    expect(player.pointsWon).toBe(0);

    player.wonPoint();
    expect(player.pointsWon).toBe(1);
  });

  test("wonGames increments games and resets points", () => {
    expect(player.gamesWon).toBe(0);

    // Increment points a few times first to verify initial state
    [...Array(4)].forEach(() => player.wonPoint());
    expect(player.pointsWon).toBe(4);

    // Game won! Points should now be reset for new game.
    player.wonGame();
    expect(player.gamesWon).toBe(1);
    expect(player.pointsWon).toBe(0);
  });

  test("wonSets increments sets and resets games and points", () => {
    expect(player.setsWon).toBe(0);

    // Increment points and games a few times first to verify initial state
    [...Array(5)].forEach(() => player.wonGame());
    [...Array(4)].forEach(() => player.wonPoint());
    expect(player.gamesWon).toBe(5);
    expect(player.pointsWon).toBe(4);

    // Set won! Set should increment and games and points should reset for the next set.
    player.wonSet();
    expect(player.setsWon).toBe(1);
    expect(player.gamesWon).toBe(0);
    expect(player.pointsWon).toBe(0);
  });
});
