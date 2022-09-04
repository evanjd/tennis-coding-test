import StandardGame from "./StandardGame";
import { helpers } from "../../../__tests__";

describe("Standard game", () => {
  const game = new StandardGame();

  describe("Game win condition matches tennis rules", () => {
    test("Player has not won game when score difference minimum isn't reached", () => {
      // Score satisfies minimum for win condition, but difference too small
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 5 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 4 });

      const didPlayerWinGame = game.isPlayerWinner(player, opponent);

      expect(didPlayerWinGame).toBe(false);
    });

    test("Player has not won game when minimum score is not reached", () => {
      // Score difference satisfies minimum for win condition, but score too low
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 3 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 0 });

      const didPlayerWinGame = game.isPlayerWinner(player, opponent);

      expect(didPlayerWinGame).toBe(false);
    });

    test("Player has won game when all conditions are met", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 5 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 3 });

      const didPlayerWinGame = game.isPlayerWinner(player, opponent);

      expect(didPlayerWinGame).toBe(true);
    });

    test("Player has not won game when opponent has won", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 5 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 3 });

      const didPlayerWinGame = game.isPlayerWinner(opponent, player);

      expect(didPlayerWinGame).toBe(false);
    });
  });

  describe("Game scores are described correctly", () => {
    test("Deuce is returned when scores match and minimum point condition is met", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 3 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 3 });

      const scoreDescription = game.getScoreDescription(player, opponent);

      expect(scoreDescription).toBe("Deuce");
    });

    test("Deuce is not returned when scores are too low", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 1 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 1 });

      const scoreDescription = game.getScoreDescription(player, opponent);

      expect(scoreDescription).toBe("15-15");
    });

    test("Advantage scoring is returned when scores off by 1 and minimum point condition is met", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 5 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 4 });

      const scoreDescription = game.getScoreDescription(player, opponent);

      expect(scoreDescription).toBe("Advantage Player 1");
    });

    test("Advantage scoring not used when scores are too low", () => {
      const player = helpers.getPlayerWithScore("Player 1", { pointsWon: 2 });
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 1 });

      const scoreDescription = game.getScoreDescription(player, opponent);

      expect(scoreDescription).toBe("30-15");
    });

    test("Scores increment consistent to tennis rules", () => {
      const opponent = helpers.getPlayerWithScore("Player 2", { pointsWon: 0 });

      for (let i = 0; i < 4; i++) {
        const player = helpers.getPlayerWithScore("Player 1", { pointsWon: i });
        const scoreDescription = game.getScoreDescription(player, opponent);

        switch (i) {
          case 0:
            expect(scoreDescription).toBe("0-0");
            break;
          case 1:
            expect(scoreDescription).toBe("15-0");
            break;
          case 2:
            expect(scoreDescription).toBe("30-0");
            break;
          case 3:
            expect(scoreDescription).toBe("40-0");
            break;
        }
      }
    });
  });
});
