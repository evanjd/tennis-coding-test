import { Match, Player } from "../../src/models";

describe("Tie-breaker game", () => {
  test("set play and score reporting adheres to tennis rules", () => {
    const nadal = new Player("Rafael Nadal");
    const federer = new Player("Roger Federer");
    const match = new Match(nadal, federer);

    // 1st game
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("0-0 0-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("0-0 0-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("0-0 0-40");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("0-1 0-0");

    // 2nd Game
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("0-1 15-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("0-1 30-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("0-1 40-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("1-1 0-0");

    // 3rd game
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("1-1 0-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("1-1 0-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("1-1 0-40");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("1-2 0-0");

    // 4th game
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("1-2 15-0");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("1-2 15-15");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("1-2 30-15");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("1-2 40-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("1-2 40-30");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("2-2 0-0");

    // 5th game
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("2-2 0-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("2-2 0-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("2-2 0-40");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("2-2 15-40");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("2-3 0-0");

    // 6th game
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("2-3 15-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("2-3 30-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("2-3 40-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("3-3 0-0");

    // 7th game
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-3 0-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-3 0-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-3 0-40");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-4 0-0");

    // 8th game
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("3-4 15-0");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-4 15-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-4 15-30");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("3-4 30-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("3-4 30-40");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("3-4 Deuce");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("3-4 Advantage Rafael Nadal");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("4-4 0-0");

    // 9th game
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("4-4 0-15");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("4-4 15-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("4-4 15-30");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("4-4 30-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("4-4 30-40");
    match.pointWonBy(federer);

    // 10th game
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("4-5 15-0");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("4-5 15-15");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("4-5 30-15");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("4-5 40-15");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("5-5 0-0");

    // 11th game
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-5 0-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-5 0-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-5 0-40");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-6 0-0");

    // 12th game
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("5-6 15-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("5-6 30-0");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("5-6 40-0");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-6 40-15");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-6 40-30");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("5-6 Deuce");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("5-6 Advantage Rafael Nadal");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("6-6 0-0");

    // 13th game (tie-breaker)
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("6-6 1-0");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("6-6 1-1");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("6-6 2-1");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("6-6 2-2");
    match.pointWonBy(nadal);
    expect(match.getScore()).toEqual("6-6 3-2");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("6-6 3-3");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("6-6 3-4");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("6-6 3-5");
    match.pointWonBy(federer);
    expect(match.getScore()).toEqual("6-6 3-6");
    match.pointWonBy(federer); // Set point
    expect(match.getScore()).toEqual("Set won by Roger Federer");
  });
});
