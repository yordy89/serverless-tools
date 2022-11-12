module.exports = {
  roots: ['src'],
  testMatch: ['**/**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  modulePaths: ['<rootDir>/src/layers/generate-pdf/nodejs/node_modules']
};
