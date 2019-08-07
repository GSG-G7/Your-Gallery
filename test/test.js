const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

test('test for client error 404', (t) => {
  supertest(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.clientError, true, 'should be client error');
        t.end();
      }
    });
});
