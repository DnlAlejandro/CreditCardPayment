module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
}