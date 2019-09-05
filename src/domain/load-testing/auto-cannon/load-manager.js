const autoCannon = require('autocannon');
const loadConfiguration = require('./configuration');
const log = require('../../../application/config/logger/logger-configuration');

const loadManager = {

	// eslint-disable-next-line no-tabs
	/*
  Trigger — execute simple load testing sessions based on configuration file.
   */
	injectLoad:  () => {

		log.info('Attempting to execute a load testing sessions...');
		log.info(`Execution name: ${loadConfiguration.execution.title}`);

    const sessionsConfiguration = loadConfiguration.execution;

		let session = autoCannon(sessionsConfiguration, loadManager.sessionsFinished);

		autoCannon.track(session);

		process.once('SIGINT', () => {
			session.stop();
			log.warn('Stopped! by a evil CTRL-C');
		})

	},

	sessionsFinished: (err, res) => {

		log.info({
			error: err,
			result: res
		});

		console.log('finished bench', err, res);
	}
};

module.exports = loadManager;
