import Sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import SequelizeUsers from '../database/models/SequelizeUser';
import app from '../app';
import { usersListMock } from '../mocks/users.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests of route get /users', () => {
  afterEach(Sinon.restore);
  it('Tests if endpoint get /users returns status 200.', async function () {    
    const { body, status } = await chai.request(app).get('/users');  
    
    expect(status).to.be.equal(200);
  });

  it('Tests if endpoint get /users returns users list.', async function () {
    Sinon.stub(SequelizeUsers, 'findAll').resolves(usersListMock as any);
    
    const { body, status } = await chai.request(app).get('/users');     
    
    expect(body).to.deep.equal(usersListMock);
  });

})