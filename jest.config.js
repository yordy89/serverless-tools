module.exports = {
  roots: ['src'],
  testMatch: ['**/tests/**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
