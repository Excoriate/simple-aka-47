const appHealth = require('../../application/health/health-status');
const traceHeaders = require('../../application/health/tracing-header');
const httpStatus = require('http-status-codes');

const apiHealth = {


  /*
    Return uptime, as JSON. For information purposes  .
   */
  getUptimeApi : async (request, reply, next) => {

    reply
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", traceHeaders.join(","))
      .header("Access-Control-Allow-Methods", "GET, OPTIONS")
      .code(httpStatus.OK)
      .send({
        status: httpStatus.OK,
        data: await appHealth.getUptimeInMs(),
        log: 'Successfully obtained response.'
      });

    //next();

  },

/*
  Return environment variables configured at micro service level.
 */
  getEnvVariablesApi : async(request, reply, next) => {

    reply
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", traceHeaders.join(","))
      .header("Access-Control-Allow-Methods", "GET, OPTIONS")
      .code(httpStatus.OK)
      .send({
        status: httpStatus.OK,
        data: await appHealth.getEnvironmentVariablesSet(),
        log: 'Environment variables configured at micro service level.'
      });

    //next();
  },

  /*
    Return configuration set by default in the API.
   */
  getConfigurationApi : async (request, reply, next) => {

    reply
      .header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", traceHeaders.join(","))
      .header("Access-Control-Allow-Methods", "GET, OPTIONS")
      .code(httpStatus.OK)
      .send({
        status: httpStatus.OK,
        data: await appHealth.getConfiguration(),
        log: 'Default configuration for this micro service.'
      });
  }

};


module.exports = apiHealth;