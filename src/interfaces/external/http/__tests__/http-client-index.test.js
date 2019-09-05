const test = require('../http-client/index');


describe('Testing HTTP client with Axios.', ()=> {

  beforeAll(async ()=>{

    require('dotenv').config();
    process.env.NODE_ENV = 'development';
    process.env.PORT_HOST = 6003;

  });

  it('Should return a valid HTTP 200 response.', async () => {

    let options = {
      method: 'GET',
      headers:  { 'content-type': 'application/x-www-form-urlencoded' },
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    };

    let result = await test.httpRequestGeneric(options);

    expect(result).toBeDefined();
    expect(result.response).toBeDefined();
    expect(result.response.status).toEqual(200);

  });


});






