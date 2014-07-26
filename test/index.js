var http = require('http');
var cors = require('..');
var should = require('should');
var request = require('supertest');


describe('Permissive CORS', function () {

  describe('Origin', function () {
    it('allows requests from anywhere', function (done) {
      request(createServer())
        .get('/')
        .expect('Access-Control-Allow-Origin', '*')
        .expect(200, done);
    });
  });

  describe('Method', function () {
    it('allows any requested method', function (done) {
      request(createServer())
        .options('/')
        .set('Access-Control-Request-Method', 'BANANA')
        .expect('Access-Control-Allow-Methods', 'BANANA')
        .expect(200, done);
    });

    it('allows any performed method', function (done) {
      request(createServer())
        .delete('/')
        .expect(200, done);
    });
  });

  describe('Headers', function () {
    it('allows any requested header', function (done) {
      request(createServer())
        .options('/')
        .set('Access-Control-Request-Headers', 'Banana')
        .expect('Access-Control-Allow-Headers', 'Banana')
        .expect(200, done);
    });
  });

});

function createServer(format, opts, fn) {
  var middleware = cors();

  return http.createServer(function (req, res) {
    middleware(req, res, function onDone() {
      res.end();
    });
  });
}
