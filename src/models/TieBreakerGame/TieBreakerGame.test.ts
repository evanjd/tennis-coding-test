import TieBreakerGame from "./TieBreakerGame";
import { helpers } from "../../../__tests__";

describe("Tie-breaker game", () => {
  const game = new TieBreakerGame();

  describe("Game win condition matches tennis rules", () => {
    test("Player has not won tie breaker when score difference minimum isn't reached", () => {
      // Score satisfies minimum for win condition, but difference too small
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 5 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 4 });

      const didPlayerWinGame = game.isPlayerWinner(player, opponent);

      expect(didPlayerWinGame).toBe(false);
    });

    test("Player has not won tie breaker when minimum score is not reached", () => {
      // Score difference satisfies minimum for win condition, but score too low
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 3 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 0 });

      const didPlayerWinGame = game.isPlayerWinner(player, opponent);

      expect(didPlayerWinGame).toBe(false);
    });

    test("Player has won tie breaker when all conditions are met", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 8 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 6 });

      const didPlayerWinGame = game.isPlayerWinner(player, opponent);

      expect(didPlayerWinGame).toBe(true);
    });

    test("Player has not won tie breaker when opponent has won", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 8 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 6 });

      const didPlayerWinGame = game.isPlayerWinner(opponent, player);

      expect(didPlayerWinGame).toBe(false);
    });
  });

  describe("Game scores are described correctly", () => {
    const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 2 });
    const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 3 });

    const scoreDescription = game.getScoreDescription(player, opponent);
    expect(scoreDescription).toBe("2-3");
  });
});
