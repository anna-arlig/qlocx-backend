import chai from 'chai'
import chaiHttp from 'chai-http'
import { createToken } from '../utils/token.js'
import { BASE_URL } from '../config/index.js'
const expect = chai.expect
const token = createToken('1337')

chai.use(chaiHttp)

describe('Login tests', () => {

  it('should return status 200 and log in succesfully', (done) => {
    chai.request(BASE_URL)
    .post('/api/user/auth')
    .set('content-type', 'application/json')
    .send({email: 'anna.arlig@gmail.com', password: 'Qlocx2016'})
    .end((error, response) => {
      expect(response).to.have.status(200);
      expect(response.body).to.have.property("token");
      done()
    })
  })

  it('should return status 403 forbidden when given wrong credentials', (done) => {
    chai.request(BASE_URL)
    .post('/api/user/auth')
    .set('content-type', 'application/json')
    .send({email: 'anna.arlig@gmail.com', password: 'WrongPassword'})
    .end((error, response) => {
      expect(response).to.have.status(403);
      done()
    })
  })
})

describe('Token tests', () => {

  it('should return status 200 when given a valid token', (done) => {
    chai.request(BASE_URL)
    .get('/api/user/find/1337')
    .set({ "Authorization": `Bearer ${token}` })
    .end((error, response) => {
      expect(response).to.have.status(200);
      done()
    })
  })

  it('should return status 401 Unauthorized when given an unvalid token', (done) => {
    chai.request(BASE_URL)
    .get('/api/user/find/1337')
    .set('content-type', 'application/json')
    .set({ "Authorization": `Bearer notAValidToken` })
    .end((error, response) => {
      expect(response).to.have.status(401);
      done()
    })
  })
})
