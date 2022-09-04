import { Match, Player } from "models";

const nadal = new Player("Rafael Nadal");
const federer = new Player("Roger Federer");

const match = new Match(nadal, federer);

// 1st game (missing from video, so just assuming Federer won this way)
match.pointWonBy(federer);
match.pointWonBy(nadal);
match.pointWonBy(federer);
match.pointWonBy(nadal);
console.log(match.getScore()); // 0-1 30-30
