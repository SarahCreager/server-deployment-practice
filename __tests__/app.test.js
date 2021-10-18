'use strict';

const app = require('../app');
const supertest = require('supertest');
const {expect, it} = require('@jest/globals');

// allows us to test without having the app up and running
const request = supertest(app);

describe('testing the Express Server', () => {

  it('Should respond with a string on POST /talk', async () => {
    let response = await request.post('/talk').send({
      words: 'Hello World',
    })

    expect(response.status).toBe(200);
    expect(typeof(response.text)).toBe('string');
    expect(response.text).toBe('Hello World');
  });

  it('Should respond with a string on GET /repeat', async () => {
    let response = await request.get('/repeat');

    expect(response.status).toBe(200);
    expect(typeof (response.text)).toBe('string');
  })

});