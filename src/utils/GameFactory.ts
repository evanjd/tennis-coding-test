import type { RuleManager } from "interfaces";
import { StandardGame, TieBreakerGame } from "models";

export default class GameFactory {
  static getGame(player1GamesWon: number, player2GamesWon: number): RuleManager {
    if (player1GamesWon === player2GamesWon && player1GamesWon === 6) {
      return new TieBreakerGame();
    } else {
      return new StandardGame();
    }
  }
}
