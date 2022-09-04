# Tennis coding test

## Getting Started

#### Initial setup

Please switch to Node v14 or greater before starting.

After cloning the repo, run:

```sh
yarn install
```

#### Run sample match

This will execute the sample match found at `src/play-match.ts`.
If left unchanged, this will play the 1st set of Federer vs Nadal's 4th game at Wimbledon 2019.

```sh
yarn play-match
```

#### Run tests

```sh
yarn test
```

Unit tests are colocated with the code they're testing. Integration tests live in `__tests__/integration`.

## Assumptions

- Where there's a difference in rules between coding test description and [tennis rules wikipedia page](https://en.wikipedia.org/wiki/Tennis_scoring_system), the coding test description is honoured. For example:
  - `0` instead of `Love`.
  - `15-15` instead of `15 all`.
  - Scores always returned in same order regardless of who's serving.
- Minimal input validation.
- Only a single set is explicitly supported.
- Match class and constructor for Player are the only public interfaces intended to be used by consumers.

## Areas to improve

- Players managing their own state (points, games and sets won) makes it possible for the match to enter an invalid state, in hindsight I'd model this differently so that score state is managed elsewhere (and privately).
- `RuleManager` is a bit of an odd concept and doesn't reflect tennis domain well. Would consider breaking up so that win conditions and score reporting is managed separately.
- Win conditions (eg. minimum score to win game/set, minimum score difference, etc) could be extracted into constants to make game rules easier to configure and to avoid repeating win conditions between implementation and tests.
