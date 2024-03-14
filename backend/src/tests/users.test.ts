import Sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import SequelizeUsers from '../database/models/SequelizeUser';
import app from '../app';
import { usersListMock, newValidUser, userWithExistingCPF } from '../mocks/users.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests of route get /users', () => {
  afterEach(Sinon.restore);
  it('Tests if route get /users returns status 200.', async function () {    
    const { status } = await chai.request(app).get('/users');  
    
    expect(status).to.be.equal(200);
  });

  it('Tests if route get /users returns users list.', async function () {
    Sinon.stub(SequelizeUsers, 'findAll').resolves(usersListMock as any);
    
    const { body } = await chai.request(app).get('/users');     
    
    expect(body).to.deep.equal(usersListMock);
  });
})

describe('Tests of route post /users', () => {
  let createdUserId: any;
  afterEach(async function () {
    if (createdUserId) {
      await SequelizeUsers.destroy({
        where: {
          id: createdUserId
        }
      });
    }

  });

  it('Tests if route post /users create a new user.', async function () {
    const { body, status } = await chai.request(app)
      .post('/users')
      .send(newValidUser);      

    expect(status).to.be.equal(201);
    expect(body).to.include(newValidUser);
    
    createdUserId = body.id;
  });

  it('Tests if is not possible to create a new user with an existing CPF', async function () {
    const { body, status } = await chai.request(app)
      .post('/users')
      .send(userWithExistingCPF);          

    expect(status).to.be.equal(500);
    expect(body.message).to.equal(
      "Error creating a new user: Validation error"
    );
    
    createdUserId = body.id;
  })
})