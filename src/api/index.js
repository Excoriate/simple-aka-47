const apiHealth = require('./health');
const apiInformation = require('./information');

module.exports = async fastify => {

  fastify.register(apiHealth, { prefix: '/v1/health/' });
  fastify.register(apiInformation, {prefix: '/v1/information/'})
  
};