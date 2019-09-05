const test = require('../tracing-header');


describe('Testing traces headers for Observability.',  ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return a valid trace-header object', async () => {

    expect(test).toBeDefined();

  });


});






