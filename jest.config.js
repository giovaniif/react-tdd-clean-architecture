module.exports = {
  rootDir: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
};
