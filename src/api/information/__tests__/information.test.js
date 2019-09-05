
describe('Testing information API: /v1/information/',  ()=> {

  /*
  Prepare Fastify mock-server.
   */

  let fastify = require('fastify')();

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';

    let routesIndex = require('../../../api');
    fastify.register(routesIndex);
    fastify.listen(process.env.PORT_DEBUG_HOST);

    await fastify.ready();

  });

  afterAll(async ()=>{
    await fastify.close();
  });

  it('Should return a valid 200 response', async () => {

    let request = {
      method: "GET",
      url: "/v1/information/api/",
      accept: "application/json"
    };

    const response = await fastify.inject(request);
    let payload = JSON.parse(response.payload);

    expect(response.statusCode).toBe(200);
    expect(payload).toBeDefined();
    expect(payload.data).toBeDefined();

  });


});






