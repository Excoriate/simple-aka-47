const test = require('../logger/logger-configuration');


describe('Testing logger configuration for Pino.',  ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return a valid logger object.', async () => {

    expect(test).toBeDefined();
    expect(test.level).toBeDefined();

  });


});






