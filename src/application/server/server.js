
require('dotenv').config();

const http = require('http');
const manifesto = require('../config/information/manifesto');
const loadManager = require('../../domain/load-testing/auto-cannon/load-manager');
const log = require('../config/logger/logger-configuration');

const server = http.createServer(handle);

server.listen(0, run);

function handle (req, res) {
	res.end('Running sessions...');
};

function run (){
	log.info(manifesto.information);
	loadManager.injectLoad();
};
