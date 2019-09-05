const test = require('../information/manifesto');


describe('Testing API manifesto',  ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return a valid JSON object, with API manifesto', async () => {

    expect(test).toBeDefined();
    expect(test.information.author).toEqual('Alex Torres - IdeaUP CTO');

  });


});






