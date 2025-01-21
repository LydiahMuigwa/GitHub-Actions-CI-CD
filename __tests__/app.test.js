// __tests__/app.test.js
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

describe('GET /', () => {
  it('should return 200 and "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
