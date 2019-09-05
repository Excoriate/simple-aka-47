const log = require('../../../../application/config/logger/logger-configuration');
const fetch = require('node-fetch');

const restClient = {

  getFetch: async (url, headers) => {

    let response;

    const res = await fetch(url, {
      method: "GET",
      headers
    });

    response = await res.json();

    try {

      log.info('Successfully got HTTP response.');

      return {
        response: response,
        log: 'Got HTTP response using node-fetch'
      };

    }catch (e) {
      log.error('Error — Cannot got response using node-fetch.');
      log.error(e);

      return {
        response: undefined,
        error: e
      };
    }
  },


  postFetch: async (url, data, headers) => {

    const reqHeaders = { ...headers, "Content-Type": "application/json" };

    let body = JSON.stringify(data);

    return fetch(url, { method: "POST", body, headers: reqHeaders });
  }
};


module.exports = {
  restClient
  //fastifyPlugin(restClient)
};
//module.exports = fastifyPlugin(restClient);
