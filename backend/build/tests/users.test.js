"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as sinon from 'sinon';
const sinon_1 = __importDefault(require("sinon"));
// import * as chai from 'chai';
const chai_1 = __importDefault(require("chai"));
// @ts-ignore
// import chaiHttp = require('chai-http');
const chai_http_1 = __importDefault(require("chai-http"));
const SequelizeUser_1 = __importDefault(require("../database/models/SequelizeUser"));
const app_1 = __importDefault(require("../app"));
const users_mock_1 = require("../mocks/users.mock");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Tests of route get /users', () => {
    afterEach(sinon_1.default.restore);
    it('Tests if endpoint get /users returns status 200.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default).get('/users');
            expect(status).to.be.equal(200);
        });
    });
    it('Tests if endpoint get /users returns users list.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(SequelizeUser_1.default, 'findAll').resolves(users_mock_1.usersListMock);
            const { body, status } = yield chai_1.default.request(app_1.default).get('/users');
            expect(body).to.deep.equal(users_mock_1.usersListMock);
        });
    });
});
