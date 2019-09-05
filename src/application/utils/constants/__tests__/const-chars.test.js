const test = require('../const-chars');


describe('Testing constant file with Chars.', ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return a valid object, with constants.', async () => {
    let result = test;

    expect(result).toBeDefined();
    expect(result.BRACKET_OPEN).toEqual('{');
    expect(result.BRACKET_CLOSING).toEqual('}');

  });


});






