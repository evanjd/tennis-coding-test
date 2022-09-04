import { RuleManager } from "interfaces";
import { Player } from "models";

export default class StandardGame implements RuleManager {
  private static getIndividualScoreDescription(score: number) {
    switch (score) {
      case 0:
        // "Love" may be more accurate here, but coding test specifies "0".
        return "0";
      case 1:
        return "15";
      case 2:
        return "30";
      case 3:
        return "40";
      default:
        throw new Error(`Score '${score}' out of expected range, expected values <= 3`);
    }
  }

  private static isDeuce(player1Points: number, player2Points: number): boolean {
    return player1Points >= 3 && player1Points === player2Points;
  }

  private static getPlayerAtAdvantage(player1: Player, player2: Player): Player | undefined {
    // Return early if one player has < 3 points
    if (Math.min(player1.pointsWon, player2.pointsWon) < 3) return;

    const topScorer = player1.pointsWon > player2.pointsWon ? player1 : player2;
    if (topScorer.pointsWon > 3) return topScorer;
    else return;
  }

  getScoreDescription(player1: Player, player2: Player) {
    // Is it a deuce?
    if (StandardGame.isDeuce(player1.pointsWon, player2.pointsWon)) {
      return "Deuce";
    }

    // Is it an advantage?
    const playerAtAdvantage = StandardGame.getPlayerAtAdvantage(player1, player2);
    if (playerAtAdvantage) return `Advantage ${playerAtAdvantage.name}`;

    // Return individual scores for players
    const player1Score = StandardGame.getIndividualScoreDescription(player1.pointsWon);
    const player2Score = StandardGame.getIndividualScoreDescription(player2.pointsWon);
    return `${player1Score}-${player2Score}`;
  }

  isPlayerWinner(player: Player, opponent: Player) {
    const scoreDifference = player.pointsWon - opponent.pointsWon;

    return player.pointsWon >= 4 && scoreDifference >= 2;
  }
}
