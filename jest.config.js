
module.exports = {
  testEnvironment: "node", 
  testMatch: ["**/tests/e2e/**/*.spec.ts"], 
  transform: {
    "^.+\\.ts$": "ts-jest", 
  },
};
