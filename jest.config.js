// jest.config.js
//const {defaults} = require('jest-config');

module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['**/*.js'],
	testEnvironment: 'node', // critical
	verbose: true,
	//browser: true,
	clearMocks: true,
	testMatch: ['**/__tests__/*.js?(x)']
	//setupFiles: ['<rootDir>/../../setupTests'],
	//snapshotSerializers: ['enzyme-to-json/serializer']
	//transformIgnorePatterns: ['node_modules/(?!(@atlaskit)/)'],
};
