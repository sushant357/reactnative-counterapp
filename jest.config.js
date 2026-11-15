
module.exports = {
  preset: '@react-native/jest-preset',

  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],

  collectCoverage: true,

  collectCoverageFrom: [
    'App.tsx',
    'src/utils/**/*.ts',
    '!**/node_modules/**',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'text',
    'lcov',
    'html',
  ],

  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
