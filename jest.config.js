module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1'
  },
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true
};
