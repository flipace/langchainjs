/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "./jest.env.cjs",
  modulePathIgnorePatterns: ["dist/", "docs/"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    '^.+\\.tsx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.pnp\\.[^\\/]+$",
  ],
  setupFiles: ["dotenv/config"],
  testTimeout: 20_000,
  passWithNoTests: true,
  collectCoverageFrom: ["src/**/*.ts"]
};
