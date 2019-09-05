const { fastify } = require('../server');

describe('Test Server with Fastify',  ()=> {

  /*
  Prepare Fastify mock-server.
   */

  beforeEach(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';

  });

  afterEach(async ()=>{
    await fastify.close();
  });

  it('should create a valid Fastify instance.', async () => {

    expect(fastify).toBeDefined();
    await fastify.close();

  });


});