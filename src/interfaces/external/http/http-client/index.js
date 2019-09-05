
const log = require('../../../../application/config/logger/logger-configuration');
const axios = require('axios');

const httpRequester = {

	/*
	Make an HTTP request, using axios with generic parameters.
	 */
	httpRequestGeneric : async (options) => {

		const { contentType } = options;
		const { method } = options;
		let response;

		if(contentType === undefined){
			options.contentType = 'application/json';
		}

		/*const options = {
			method: 'POST',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
			data: qs.stringify(data),
			url,
		};*/

		options.method = method.toString().toLocaleUpperCase();

		log.info(`Attempting to execute AXIOS http request to: ${options.url}`);

		try {

			response = await axios(options);

			if(response.status !== 200){
				log.error({
					log: `Error - Status message received = ${response.statusText}`,
					code: -1
				});

				return {
					log: `Error - Status message received = ${response.statusText}`,
					data: undefined
				};

			}else{

				log.info('Successfully got response.');
				log.info(response.data);

				return {
					response: response,
					log: 'Got response. HTTP 200'
				};
			}

		}catch (e) {

			response = {
				data: undefined,
				log: e
			};

			log.error(response);

			return response;
		}
	}
};


module.exports = httpRequester;