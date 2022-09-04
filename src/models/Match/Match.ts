import type { RuleManager } from "interfaces";
import { Set, Player, StandardGame, TieBreakerGame } from "models";

export default class Match {
  private players: [Player, Player];

  private currentSet: RuleManager;
  private currentGame: RuleManager;

  constructor(player1: Player, player2: Player) {
    if (player1.name === player2.name) throw new Error("Player names must be unique");

    this.players = [player1, player2];
    this.currentSet = new Set();
    this.currentGame = new StandardGame();
  }

  private getOpponentForPlayer(player: Player) {
    return player.name === this.players[0].name ? this.players[1] : this.players[0];
  }

  pointWonBy(player: Player) {
    player.wonPoint();

    const opponent = this.getOpponentForPlayer(player);

    if (this.currentGame.isPlayerWinner(player, opponent)) {
      player.wonGame();
      opponent.lostGame();

      if (this.currentSet.isPlayerWinner(player, opponent)) {
        player.wonSet();
        opponent.lostSet();
      }

      if (player.gamesWon === opponent.gamesWon && player.gamesWon === 6) {
        this.currentGame = new TieBreakerGame();
      } else {
        this.currentGame = new StandardGame();
      }
    }

    // console.log(this.getScore());
  }

  getScore() {
    const [player1, player2] = this.players;

    // Bail early if any player has won a set
    if (player1.setsWon > 0 || player2.setsWon > 0) {
      // Logic falls apart if set wins are equal, ignoring as out of scope
      const winner = player1.setsWon > 0 ? player1 : player2;

      return `Set won by ${winner.name}`;
    }

    const setsDescription = this.currentSet.getScoreDescription(player1, player2);
    const gameDescription = this.currentGame.getScoreDescription(player1, player2);

    return `${setsDescription} ${gameDescription}`;
  }
}
