export default class Player {
  readonly name: string;
  private _pointsWon = 0;
  private _gamesWon = 0;
  private _setsWon = 0;

  constructor(name: string) {
    this.name = name;
  }

  get pointsWon() {
    return this._pointsWon;
  }

  get gamesWon() {
    return this._gamesWon;
  }

  get setsWon() {
    return this._setsWon;
  }

  wonPoint() {
    this._pointsWon++;
  }

  wonGame() {
    this._gamesWon++;
    this._pointsWon = 0;
  }

  lostGame() {
    this._pointsWon = 0;
  }

  wonSet() {
    this._setsWon++;
    this._pointsWon = 0;
    this._gamesWon = 0;
  }

  lostSet() {
    this._pointsWon = 0;
    this._gamesWon = 0;
  }
}
