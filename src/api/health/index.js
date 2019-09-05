const apiHealth = require('./health');

const routesHealth = async (fastify) => {

  fastify.get('/uptime/', apiHealth.getUptimeApi);
  fastify.get('/env/', apiHealth.getEnvVariablesApi);
  fastify.get('/configuration/', apiHealth.getConfigurationApi);
};

module.exports = routesHealth;