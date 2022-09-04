import { Match, Player } from "../../src/models";

describe("Standard game", () => {
  test("set play and score reporting adheres to tennis rules", () => {
    const player1 = new Player("Player 1");
    const player2 = new Player("Player 2");
    const match = new Match(player1, player2);

    // For sake of time, player 1 is going to dominate this one.

    // 1st game
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("0-0 15-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("0-0 30-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("0-0 40-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("1-0 0-0");

    // 2nd game
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("1-0 15-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("1-0 30-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("1-0 40-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("2-0 0-0");

    // 3rd game
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("2-0 15-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("2-0 30-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("2-0 40-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("3-0 0-0");

    // 4th game
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("3-0 15-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("3-0 30-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("3-0 40-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("4-0 0-0");

    // 5th game
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("4-0 15-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("4-0 30-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("4-0 40-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("5-0 0-0");

    // 6th game
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("5-0 15-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("5-0 30-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("5-0 40-0");
    match.pointWonBy(player1);
    expect(match.getScore()).toEqual("Set won by Player 1");
  });
});
