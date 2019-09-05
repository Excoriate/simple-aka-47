const os = require('os');
const manifesto = require('../config/information/manifesto');

const healthStatus = {

  /*
  Get basic API and micro service information.
   */
  getConfiguration : async () => {

    return {
      log: 'Returned API information.',
      data: manifesto.configuration
    }
  },

  /*
  For information purposes, return the environment variables set and being used by this micro service.
   */
  getEnvironmentVariablesSet: async () => {

    return {
      log: '(Environment) variables already set at host/server level.',
      data: process.env
    }
  },

  /*
  Return basic uptime information for this nodeJs API.
   */
  getUptimeInMs : async () => {
    let processTime = process.hrtime();
    let processTimeInMiliSeconds = processTime[0] * 1000 + processTime[1] / 1000000;

    return {
      log: 'Returned statistics',
      data: {
        cpuUse : os.cpus(),
        memUse : os.freemem(),
        memTot : os.totalmem(),
        uptimeTillNow: processTimeInMiliSeconds
      }
    }
  }

};

module.exports = healthStatus;