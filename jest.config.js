module.exports = {
  roots: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
