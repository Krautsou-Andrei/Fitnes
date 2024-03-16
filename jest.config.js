export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@public/(.*)$': '<rootDir>/public/$1',
        '^@app/(.*)$': '<rootDir>/src/app/$1',
        '^@entities/(.*)$': '<rootDir>/src/entities/$1',
        '^@features/(.*)$': '<rootDir>/src/features/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
        '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    },
};
