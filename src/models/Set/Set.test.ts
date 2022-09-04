import Set from "./Set";
import { helpers } from "../../../__tests__";

describe("Set", () => {
  const set = new Set();

  describe("Set win condition matches tennis rules", () => {
    test("Player has not won set when score difference is < 2", () => {
      // Score exceeds minimum for win condition, but difference too small
      const player = helpers.getPlayerWithScore("Player 1", { gamesWon: 5 });
      const opponent = helpers.getPlayerWithScore("Player 2", { gamesWon: 4 });

      const didPlayerWinSet = set.isPlayerWinner(player, opponent);

      expect(didPlayerWinSet).toBe(false);
    });

    test("Player has not won set when minimum score is not reached", () => {
      // Score difference exceeds minimum, but score too low
      const player = helpers.getPlayerWithScore("Player 1", { gamesWon: 4 });
      const opponent = helpers.getPlayerWithScore("Player 2", { gamesWon: 2 });

      const didPlayerWinSet = set.isPlayerWinner(player, opponent);

      expect(didPlayerWinSet).toBe(false);
    });

    test("Player has won set when all conditions are met for standard set", () => {
      const player = helpers.getPlayerWithScore("Player 1", { gamesWon: 6 });
      const opponent = helpers.getPlayerWithScore("Player 2", { gamesWon: 4 });

      const didPlayerWinSet = set.isPlayerWinner(player, opponent);

      expect(didPlayerWinSet).toBe(true);
    });

    test("Player has won set when tie breaker is won", () => {
      const player = helpers.getPlayerWithScore("Player 1", { gamesWon: 7 });
      const opponent = helpers.getPlayerWithScore("Player 2", { gamesWon: 6 });

      const didPlayerWinSet = set.isPlayerWinner(player, opponent);

      expect(didPlayerWinSet).toBe(true);
    });

    test("Player has not won set when opponent has won", () => {
      const player = helpers.getPlayerWithScore("Player 1", { gamesWon: 6 });
      const opponent = helpers.getPlayerWithScore("Player 2", { gamesWon: 4 });

      const didPlayerWinSet = set.isPlayerWinner(opponent, player);

      expect(didPlayerWinSet).toBe(false);
    });
  });

  describe("Set scores are described correctly", () => {
    const player = helpers.getPlayerWithScore("Player 1", { gamesWon: 2 });
    const opponent = helpers.getPlayerWithScore("Player 2", { gamesWon: 3 });

    const scoreDescription = set.getScoreDescription(player, opponent);
    expect(scoreDescription).toBe("2-3");
  });
});
