import Match from "./Match";
import Player from "../Player";
import { helpers } from "../../../__tests__";

describe("Match", () => {
  test("Constructor throws when names match", () => {
    const createMatch = () => {
      const player1 = new Player("Spiderman");
      const player2 = new Player("Spiderman");

      return new Match(player1, player2);
    };

    expect(createMatch).toThrowError();
  });

  test("Match increments player's points when point is won", () => {
    // Set up match
    const player1 = new Player("1");
    const player2 = new Player("2");
    const match = new Match(player1, player2);

    // Increment first player's points
    match.pointWonBy(player1);

    // Player state reflects point won
    expect(player1.pointsWon).toEqual(1);

    // Description reflects 1st player's point score
    const score = match.getScore();
    expect(score).toEqual("0-0 15-0");
  });

  test("Match increments player's games when game is won", () => {
    // Set up match
    const player1 = new Player("1");
    const player2 = new Player("2");
    const match = new Match(player1, player2);

    const minimumPointsUntilGameWon = 4;

    // Increment first player's points until game win condition is reached
    for (let i = 0; i < minimumPointsUntilGameWon; i++) {
      match.pointWonBy(player1);
    }

    // Player state reflects games won
    expect(player1.gamesWon).toEqual(1);

    // Description reflects 1st player's point score
    const score = match.getScore();
    expect(score).toEqual("1-0 0-0");
  });

  test("Match increments player's sets when set is won", () => {
    // Set up match
    const player1 = new Player("Player 1");
    const player2 = new Player("Player 2");
    const match = new Match(player1, player2);

    const minimumGamesUntilSetWon = 6;
    const minimumPointsUntilGameWon = 4;

    // Increment first player's points and games until win condition is reached
    for (let games = 0; games < minimumGamesUntilSetWon; games++) {
      // Nested loops go brr
      for (let points = 0; points < minimumPointsUntilGameWon; points++) {
        match.pointWonBy(player1);
      }
    }

    // Player state reflects sets won
    expect(player1.setsWon).toEqual(1);

    // Description reflects 1st player's point score
    const score = match.getScore();
    expect(score).toEqual("Set won by Player 1");
  });

  test("Tie breaker is triggered when tie breaker conditions are met", () => {
    // Set up conditions for tie breaker
    const player1 = helpers.getPlayerWithScore("Player 1", { gamesWon: 5, pointsWon: 6 });
    const player2 = helpers.getPlayerWithScore("Player 2", { gamesWon: 6 });
    const match = new Match(player1, player2);

    // Player 1 scores a point, winning the game and triggering a tie breaker
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("6-6 0-0");

    // Both players score points
    match.pointWonBy(player1);
    match.pointWonBy(player2);

    // Is score format being used consistent with tie breakers?
    expect(match.getScore()).toEqual("6-6 1-1");
  });
});
