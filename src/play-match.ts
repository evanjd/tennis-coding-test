import { Match, Player } from "models";

const nadal = new Player("Rafael Nadal");
const federer = new Player("Roger Federer");

const match = new Match(nadal, federer);

/*
  For a little whimsy (and to sanity test rule implementation),
  set played here is transcribed from 4th match between Rafael and Roger at Wimbledon in 2019.

  Score will be printed at random points to compare with real gameplay.

  https://www.youtube.com/watch?v=wZnCcqm_g-E (0:00 to 53:09)
 */

// 1st game (missing from video, so just assuming Federer won this way)
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(federer);
console.log(match.getScore()); // 0-1 0-0

// 2nd Game
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(nadal);
console.log(match.getScore()); // 1-1 0-0

// 3rd game
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(federer);

// 4th game
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(federer);
console.log(match.getScore()); // 1-2 40-30
match.pointWonBy(nadal); // 2-2 0-0
console.log(match.getScore()); // 2-2 0-0

// 5th game
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(nadal);
console.log(match.getScore()); // 2-2 15-40
match.pointWonBy(federer);

// 6th game
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(nadal);

// 7th game
match.pointWonBy(federer);
match.pointWonBy(federer);
console.log(match.getScore()); // 3-3 0-30
match.pointWonBy(federer);
match.pointWonBy(federer);

// 8th game
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(nadal);
console.log(match.getScore()); // 3-4 Deuce
match.pointWonBy(nadal);
console.log(match.getScore()); // 3-4 Advantage Nadal
match.pointWonBy(nadal);

// 9th game
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(nadal);
console.log(match.getScore()); // 4-4 30-30
match.pointWonBy(federer);
match.pointWonBy(federer);

// 10th game
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(nadal);
console.log(match.getScore()); // 4-5 40-15
match.pointWonBy(nadal);

// 11th game
match.pointWonBy(federer);
match.pointWonBy(federer);
console.log(match.getScore()); // 5-5 0-30
match.pointWonBy(federer);
match.pointWonBy(federer);

// 12th game
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(federer);
match.pointWonBy(nadal);
console.log(match.getScore()); // 5-6 Advantage Nadal
match.pointWonBy(nadal);

// 13th game (tie-breaker)
match.pointWonBy(nadal);
console.log(match.getScore()); // 6-6 1-0
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(federer);
console.log(match.getScore()); // 6-6 3-4
match.pointWonBy(federer);
match.pointWonBy(federer);
console.log(match.getScore()); // 6-6 3-6
match.pointWonBy(federer); // Set point

console.log(match.getScore()); // Win by Federer
