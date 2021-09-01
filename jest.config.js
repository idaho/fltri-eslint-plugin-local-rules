'use strict';

module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.json'
    }
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  testMatch: [
    `<rootDir>/test/**/?(*.)+(spec|test).+(ts|tsx)`
  ]
};
