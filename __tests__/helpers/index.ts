import { Player } from "../../src/models";

type PlayerScore = { setsWon?: number; gamesWon?: number; pointsWon?: number };

export function getPlayerWithScore(
  name: string,
  { setsWon = 0, pointsWon = 0, gamesWon = 0 }: PlayerScore
) {
  const player = new Player(name);

  for (let i = 0; i < setsWon; i++) {
    player.wonSet();
  }

  for (let i = 0; i < gamesWon; i++) {
    player.wonGame();
  }

  for (let i = 0; i < pointsWon; i++) {
    player.wonPoint();
  }

  return player;
}
