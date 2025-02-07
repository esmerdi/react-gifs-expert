//ESM
/*export default { 
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};*/

//CommonJS
module.exports = {
    setupFiles: ['./jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    
};

