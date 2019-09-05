const test = require('../const-environments');


describe('Testing constant file with environment options.', ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return a valid object, with environment options.', async () => {
    let result = test.environment;

    expect(result).toBeDefined();
    expect(result.ENV_DEVELOPMENT).toEqual('DEVELOPMENT');
    expect(result.ENV_PRODUCTION).toEqual('PRODUCTION');

  });


});






