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
const sinon_1 = __importDefault(require("sinon"));
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const SequelizeUser_1 = __importDefault(require("../database/models/SequelizeUser"));
const app_1 = __importDefault(require("../app"));
const users_mock_1 = require("../mocks/users.mock");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Tests of route get /users', () => {
    afterEach(sinon_1.default.restore);
    it('Tests if route get /users returns status 200.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield chai_1.default.request(app_1.default).get('/users');
            expect(status).to.be.equal(200);
        });
    });
    it('Tests if route get /users returns users list.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(SequelizeUser_1.default, 'findAll').resolves(users_mock_1.usersListMock);
            const { body } = yield chai_1.default.request(app_1.default).get('/users');
            expect(body).to.deep.equal(users_mock_1.usersListMock);
        });
    });
});
describe('Tests of route post /users', () => {
    let createdUserId;
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (createdUserId) {
                yield SequelizeUser_1.default.destroy({
                    where: {
                        id: createdUserId
                    }
                });
            }
        });
    });
    it('Tests if route post /users create a new user.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default)
                .post('/users')
                .send(users_mock_1.newValidUser);
            expect(status).to.be.equal(201);
            expect(body).to.include(users_mock_1.newValidUser);
            createdUserId = body.id;
        });
    });
    it('Tests if is not possible to create a new user with an existing CPF', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default)
                .post('/users')
                .send(users_mock_1.userWithExistingCPF);
            console.log(body);
            expect(status).to.be.equal(500);
            // expect(body).to.be(
            //   message: "Error creating a new user: Validation error"
            // );
            createdUserId = body.id;
        });
    });
});
