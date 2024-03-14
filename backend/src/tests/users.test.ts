import assert from 'assert';
import * as sinon from 'sinon';
// import * as chai from 'chai';
import chai from 'chai';
// @ts-ignore
// import chaiHttp = require('chai-http');
import chaiHttp from 'chai-http';
import SequelizeUsers from '../database/models/SequelizeUser';
import app from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests of route get /users', () => {
  afterEach(sinon.restore);
  it('Tests if endpoint get /users returns the expected values.', async function () {
    // sinon.stub(SequelizeUsers, 'findAll').resolves(matches as any);
    
    const { body, status } = await chai.request(app).get('/users');
    console.log(status);
    
    
    expect(status).to.be.equal(200);
    // expect(body).to.deep.equal(matches);
  });
})