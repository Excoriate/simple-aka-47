const test = require('../rest-client/index');


describe('Testing HTTP client with Node-fetch.', ()=> {

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

    let result = await test.restClient.getFetch(options.url, options.headers);

    expect(result).toBeDefined();
    expect(result.response).toBeDefined();

  });

  it('Should return a valid response using a POST http Verb.', async () => {

    let options = {
      headers:  { 'content-type': 'Content-type": "application/json; charset=UTF-8' },
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    };

    let result = await test.restClient.postFetch(options.url, options.data, options.headers);

    expect(result).toBeDefined();


  });


});






