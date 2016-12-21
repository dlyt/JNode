var app = require('../app');
var supertest = require('supertest');
var request = supertest(app);

var should = require('should');

var id

describe('测试api', function () {

  it('POST: code should return 0', function (done) {

    request.post('/api/city')

      .send({city: '测试城市'})
      .end(function (err, res) {

        const text = JSON.parse(res.text)
        text.code.should.equal('0');

        id = text.value

        done(err);
      });
  });

  it('GET: code should return 0', function (done) {

    request.get(`/api/city/${id}`)

      .end(function (err, res) {

        const text = JSON.parse(res.text)
        text.code.should.equal('0');


        done(err);
      });
  });

  it('PUT: code should return 0', function (done) {

    request.put(`/api/city/${id}`)

      .send({city: '修改城市'})
      .end(function (err, res) {

        const text = JSON.parse(res.text)
        text.code.should.equal('0');


        done(err);
      });
  });

  it('DELETE: code should return 0', function (done) {

    request.delete(`/api/city/${id}`)

      .end(function (err, res) {

        const text = JSON.parse(res.text)
        text.code.should.equal('0');


        done(err);
      });
  });


})
