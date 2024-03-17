module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.jsx'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|webp|jpg)$': '<rootDir>/.jest/mock/fileMock.jsx',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}