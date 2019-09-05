const apiInfo = require('./information');

const routesInformation = async (fastify) => {

  fastify.get('/api/', apiInfo.getManifesto)

};

module.exports = routesInformation;