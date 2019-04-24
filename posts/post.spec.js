const routers = require('./post-router')
const request = require('supertest')
  
describe('POST /', () => {

    it('should post', () => {
        request(routers)
        .post('/')
        .then(res => {
                expect(res.type).toBe('application/json')
            })
    })

})

describe('GET /', () => {

    it('should get stuff', () => {
        request(routers)
        .get('/post')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
    
})

describe('DELETE /', () => {
    it('should delete', () => {
        request(routers)
        .delete('/post/update/:id')
        .then(res => {
            expect(res.status).toBe(201)
        })
    })
})