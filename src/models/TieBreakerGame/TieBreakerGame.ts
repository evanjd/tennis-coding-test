import { RuleManager } from "interfaces";
import { Player } from "models";

export default class TieBreakerGame implements RuleManager {
  getScoreDescription(player1: Player, player2: Player) {
    return `${player1.pointsWon}-${player2.pointsWon}`;
  }

  isPlayerWinner(player: Player, opponent: Player) {
    const scoreDifference = player.pointsWon - opponent.pointsWon;

    return player.pointsWon >= 7 && scoreDifference >= 2;
  }
}
