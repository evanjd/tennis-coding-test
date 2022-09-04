import GameFactory from "./GameFactory";
import { StandardGame, TieBreakerGame } from "../models";

describe("Game factory", () => {
  test("Standard rule set returned for new match", () => {
    const game = GameFactory.getGame(0, 0);
    expect(game).toBeInstanceOf(StandardGame);
  });

  test("Standard rule set returned for every game where games won is < 6", () => {
    [...Array(5)].map((_, gamesWon) => {
      const game = GameFactory.getGame(gamesWon + 1, gamesWon + 1);
      expect(game).toBeInstanceOf(StandardGame);
    });
  });

  test("Tie breaker rule set returned when both players scores are equal to 6", () => {
    const game = GameFactory.getGame(6, 6);
    expect(game).toBeInstanceOf(TieBreakerGame);
  });
});
