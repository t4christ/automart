import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../..';

import { validRegisterFixture, inValidRegisterFixture} from './fixtures/user';
import { users } from '../datastore';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

const url = '/api/v1/auth/register';
describe('Test for user route', () => {
    describe('Test for register API', () => {
        it('Should return 201 status code and create new user', (done) => {
            const newLength = users.length + 1;
            chai.request(app)
                .post(url)
                .send(validRegisterFixture[0])
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    expect(res.body.status).to.equal(201);
                    expect(res.body.data).to.be.a('object');
                    expect(users).to.have.length(newLength);
                    done();
                });
        });
        it('Should return 201 status code and create another user', (done) => {
            const newLength = users.length + 1;
            chai.request(app)
                .post(url)
                .send(validRegisterFixture[1])
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    expect(res.body.status).to.equal(201);
                    expect(res.body.data).to.be.a('object');
                    expect(users).to.have.length(newLength);
                    done();
                });
        });


        it('should return status code 400 and send error message for undefined/empty email', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[0])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for spaced email', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[1])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for invalid email format', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[2])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for existing email', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[3])
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(409);
                    expect(res.body.error).to.equal('Email in use already');
                    done();
                });
        });
        // firstname
        it('should return status code 400 and send error message for undefined/empty firstname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[4])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for spaced firstname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[5])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for short firstname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[6])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
  
        it('should return status code 400 and send error message for undefined/empty lastname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[7])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for spaced lastname', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[8])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        // Password
        it('should return status code 400 and send error message for undefined/empty password', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[9])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for short password length', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[10])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
        it('should return status code 400 and send error message for unspecified address', (done) => {
            chai
                .request(app)
                .post(url)
                .send(inValidRegisterFixture[11])
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status');
                    res.body.should.have.property('error');
                    expect(res.body.status).to.equal(400);
                    expect(res.body.error).to.be.an('object');
                    done();
                });
        });
    });
});