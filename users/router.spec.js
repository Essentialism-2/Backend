const request = require('supertest');
const server = require('../api/server');

let testEmail = `testing12_${Date.now()}@gmail.com`;
let testName = 'Test Name'
let testId;
let testToken;

describe('API LOGIN / REGISTER Functionality', () => {
    it('Should run a test', () => {
        expect(true).toBe(true);
    })

    it('Should fail registering a user for missing email', () => {
        return request(server)
        .post('/api/users/register')
        .send({  password: 'password'})
        .then(res => {
            expect(res.body.error).toBe("Could not add user");
        })
    })

    it('Should register a user', () => {
        return request(server)
        .post('/api/users/register')
        .send({ email: testEmail, password: 'password', name: testName})
        .then(res => {

            expect(res.body.message).toBe(`Welcome ${testName}`);
        })
    })

    it('should fail loggin in with wrong credentials', () => {
        return request(server)
        .post('/api/users/login')
        .send({email: testEmail, password: 'wrongPassword'})
        .then(res => {
            expect(res.body.message).toBe(`Invalid Credentials`);
        })
    })

    it('should login a user', () => {
        return request(server)
        .post('/api/users/login')
        .send({email: testEmail, password: 'password'})
        .then(res => {
            testId = res.body.id;
            testToken = res.body.token;
            expect(res.body.message).toBe(`Welcome ${testName}`);
        })
    })

    it('Should delete the user', () => {
        return request(server)
        .delete(`/api/users/${testId}`)
        .then(res => {
            expect(res.body.message).toBe(`User ${testId} successfully deleted`);
        })
    })


})

