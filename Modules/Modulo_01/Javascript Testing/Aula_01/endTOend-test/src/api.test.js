const { describe, it } = require('mocha')
const assert = require('assert')

const request = require('supertest')
const app = require('./api')


describe('API Suite test', () => {
    describe('/contact', () => {
        it('should request the contact page and return HTTP Status 200', async () => {
            const response = await request(app)
            .get('/contact')
            .expect(200)
            assert.deepStrictEqual(response.text, 'contact us page')

        })
    })

    describe('/hello', () => {
        it('should request an inexitent route /hi and redirect to /hello', async () => {

            const response = await request(app)
            .get('/hi')
            .expect(200)
            assert.deepStrictEqual(response.text, 'Hello World')

         })
    })
    describe('/login', () => {
        it('should login sucessfully on the login route and return HTTP Status 200 ', async () => {

            const response = await request(app)
            .post('/login')
            .send({
                username: 'Eurico',
                password: '234',
                email: 'euricoteste@gmail.com'
            })
            .expect(200)
            assert.deepStrictEqual(response.text, 'Logging has succeeded!')

         })
    })

    describe('/login', () => {
        it('should unautorize a request when requesting it using wrong credentials and return HTTP Status 401 ', async () => {

            const response = await request(app)
            .post('/login')
            .send({
                username: 'erico',
                password: 'e34',
                email: 'euricqwteste@gmail.com'
            })
            .expect(401)

            assert.ok(response.unauthorized)
            assert.deepStrictEqual(response.text, 'Logging failed!')

         })
    })
})