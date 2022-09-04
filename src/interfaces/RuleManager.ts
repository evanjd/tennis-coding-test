import type { Player } from "models";

/**
 * Rule managers are responsible for determining the winner of a given game, set or match.
 * They also interpret the scores of the players consistent with the rules of tennis.
 *
 * Rule managers defer to player's state for determining current scores.
 *
 * @interface RuleManager
 */
export default interface RuleManager {
  getScoreDescription: (player1: Player, player2: Player) => string;
  isPlayerWinner: (player: Player, opponent: Player) => boolean;
}
