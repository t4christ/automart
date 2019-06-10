import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

import { validCarFixtures, invalidCarFixtures } from './fixtures/car';
import { cars } from '../datastore';

const { should, expect } = chai;
should();
chai.use(chaiHttp);
let userClaim;
let adminToken;
let ownerClaim;

describe('Create token for user', () => {
    it('Should create token after successful login', async () => {
        const res = await chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'reymon@gmail.com',
                password: 'bradpass'
            })
                expect(res).to.have.status(200);
                userClaim = res.body.data.token;
    });

    it('Should create token for admin after successful login', async () => {
        const res = await chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'adminone@gmail.com',
                password: 'adminmarkpass'
            })
                expect(res).to.have.status(200);
                adminToken = res.body.data.token;
    });

    it('Should create token for admin after successful login', async () => {
        const res = await chai.request(app)
            .post('/api/v1/auth/login')
            .send({
                email: 'karim@gmail.com',
                password: 'mochapass'
            })
                expect(res).to.have.status(200);
                ownerClaim = res.body.data.token;
    });
});


describe('Test for Cars routes', () => {
    describe('Test for postAd route', () => {
        it('should return 201 status and post ad', async () => {
            const newLength = cars.length + 1;
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(validCarFixtures[0])
            res.should.have.status(201);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(201);
            expect(res.body.data).to.be.a('object');
            expect(cars).to.have.length(newLength);
        });
        it('should return 201 status and post ad', async () => {
            const newLength = cars.length + 1;
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(validCarFixtures[1])
            res.should.have.status(201);
            res.body.should.be.an('object');
            expect(res.body.status).to.equal(201);
            expect(res.body.data).to.be.a('object');
            expect(cars).to.have.length(newLength);
        });
        //test for state
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[0])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });

        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[1])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //test for price
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[2])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[3])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        // test for manufacturer
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[4])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[5])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });

        // test for model
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[6])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[7])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //test for bodytype
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[8])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[9])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });
        //test for imageurl
        it('should return 400 status code and not post ad', async () => {
            const res = await chai.request(app)
            .post('/api/v1/car')
            .set('authorization', userClaim)
            .send(invalidCarFixtures[10])
             res.should.have.status(400);
             res.body.should.be.an('object');
             expect(res.body.status).to.equal(400);
             expect(res.body.errors).to.be.a('object');
        });

        describe('Test for PATCH endpoint', () => {
            it('Should allow owner update car ad status and return status code of 200', async () => {
                const res = await chai.request(app)
                .patch('/api/v1/car/2/status')
                .set('authorization', userClaim)
                res.should.have.status(200);
                res.body.should.be.an('object');
                expect(res.body.status).to.equal(200);
                expect(res.body.data).to.be.an('object');
            });
            it('Should not allow owner update car ad status and return status code of 422', async () => {
                const res = await chai.request(app)
                .patch('/api/v1/car/2/status')
                .set('authorization', userClaim)
                res.should.have.status(422);
                res.body.should.be.an('object');
                expect(res.body.status).to.equal(422);
                expect(res.body.error).to.be.equal('This ad has already been marked as sold');
            });



    });
})
})


