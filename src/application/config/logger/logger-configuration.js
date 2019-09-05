const logger = require('pino');

const options = {

	logLevel : ()=>{

		if(process.env.LOG_LEVEL === undefined){
			return  process.env.LOG_LEVEL || 'info';

		}else{
			return process.env.LOG_LEVEL;
		}
	},

	enablePretty: () =>{
		return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
	}
};

const conf = logger({

	//level: options.logLevel(),
	level: 'info',
	crlf: true,
	prettyPrint: options.enablePretty(),
	messageKey: 'message',
	useLevelLabels: true,

});

module.exports = conf;
