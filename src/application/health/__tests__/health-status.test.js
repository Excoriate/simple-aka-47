const test = require('../health-status');


describe('Testing health-status application service.', ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return API configuration.', async () => {
    let result = await test.getConfiguration();

    expect(result).toBeDefined();
    expect(result.log).toEqual('Returned API information.');
    expect(result.data).toBeDefined();

  });

  it('Should return environment variables configured..', async () => {
    let result = await test.getEnvironmentVariablesSet();

    expect(result).toBeDefined();
    expect(result.log).toEqual('(Environment) variables already set at host/server level.');
    expect(result.data).toBeDefined();

  });

  it('Should return API uptime till now...', async () => {

    let result = await test.getUptimeInMs();

    expect(result).toBeDefined();
    expect(result.log).toEqual('Returned statistics');
    expect(result.data).toBeDefined();

  });


});






