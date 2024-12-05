module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    testEnvironmentOptions: {
      customExportConditions: ["node", "node-addons"],
    },
    collectCoverage: true,
    collectCoverageFrom: [
      'src/components/**/*.{js,vue}',
      '!src/components/**/*.spec.js'
    ],
    coverageThreshold: {
      global: {
        lines: 50
      }
    }
  };
  