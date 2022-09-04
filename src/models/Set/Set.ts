import { RuleManager } from "interfaces";
import { Player } from "models";

export default class Set implements RuleManager {
  getScoreDescription(player1: Player, player2: Player) {
    return `${player1.gamesWon}-${player2.gamesWon}`;
  }

  isPlayerWinner(player: Player, opponent: Player) {
    const scoreDifference = player.gamesWon - opponent.gamesWon;

    // Player has won set if reached 7 (from tie breaker), or if normal win condition is met
    return player.gamesWon === 7 || (player.gamesWon >= 6 && scoreDifference >= 2);
  }
}
