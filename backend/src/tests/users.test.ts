import Sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import SequelizeUsers from '../database/models/SequelizeUser';
import app from '../app';
import {
  usersListMock,
  newValidUser,
  userWithExistingCPF,
  userInvalidCPF,
  userInvalidEmail,
  userInvalidStatus,
  updateUser,
} from '../mocks/users.mock';

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

describe('Tests of route get /users/:id', () => {
  afterEach(Sinon.restore);
  it('Tests if route get /users/:id returns the expected user.', async function () {
    Sinon.stub(SequelizeUsers, 'findOne').resolves(usersListMock[0] as any);

    const { status, body } =  await chai.request(app).get('/users/1');

    expect(status).to.be.equal(200);
    expect(body).to.include(usersListMock[0])
  });

  it('Tests if route get /users/:id returns the expected status if no user is found.', async function () {
    const { status } =  await chai.request(app).get('/users/199');

    expect(status).to.be.equal(204);
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
  });

  it('Tests if is not possible to create a new user with invalid CPF', async function () {
    const { body, status } = await chai.request(app)
      .post('/users')
      .send(userInvalidCPF);          

    expect(status).to.be.equal(400);
    expect(body.message).to.equal(
      "O CPF deve conter 11 digitos."
    );
  });

  it('Tests if is not possible to create a new user with invalid email', async function () {
    const { body, status } = await chai.request(app)
      .post('/users')
      .send(userInvalidEmail);          

    expect(status).to.be.equal(422);
    expect(body.message).to.equal(
      "\"Email\" incorreto"
    );
  });

  it('Tests if is not possible to create a new user with invalid status', async function () {
    const { body, status } = await chai.request(app)
      .post('/users')
      .send(userInvalidStatus);          

    expect(status).to.be.equal(422);
    expect(body.message).to.equal(
      "\"status\" must be one of [Ativo, Inativo, Aguardando ativação, Desativado]"
    );
  });
});

describe('Tests of route patch /users', () => {
  let createdUserId: any;

  beforeEach(async function () {
    // creates a new user before each test to avoid update an existing valid user
    const { body } = await chai.request(app)
      .post('/users')
      .send(newValidUser);

    createdUserId = body.id;
  });

  afterEach(async function () {
    // delete the created user to maintain the DB with valid data
    if (createdUserId) {
      await SequelizeUsers.destroy({
        where: {
          id: createdUserId
        }
      });
    }
  });

  it('Tests if route patch /users update a user.', async function () {
    const { body, status } = await chai.request(app)
      .patch(`/users/${createdUserId}`)
      .send(updateUser);      

    expect(status).to.be.equal(200);
    expect(body).to.include(updateUser);
  });

});