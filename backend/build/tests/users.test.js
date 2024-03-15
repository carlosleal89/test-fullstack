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
describe('Tests of route get /users/:id', () => {
    afterEach(sinon_1.default.restore);
    it('Tests if route get /users/:id returns the expected user.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            sinon_1.default.stub(SequelizeUser_1.default, 'findOne').resolves(users_mock_1.usersListMock[0]);
            const { status, body } = yield chai_1.default.request(app_1.default).get('/users/1');
            expect(status).to.be.equal(200);
            expect(body).to.include(users_mock_1.usersListMock[0]);
        });
    });
    it('Tests if route get /users/:id returns the expected status if no user is found.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield chai_1.default.request(app_1.default).get('/users/199');
            expect(status).to.be.equal(204);
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
            expect(status).to.be.equal(500);
            expect(body.message).to.equal("Error creating a new user: Validation error");
        });
    });
    it('Tests if is not possible to create a new user with invalid CPF', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default)
                .post('/users')
                .send(users_mock_1.userInvalidCPF);
            expect(status).to.be.equal(400);
            expect(body.message).to.equal("Formato inválido do CPF.");
        });
    });
    it('Tests if is not possible to create a new user with invalid email', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default)
                .post('/users')
                .send(users_mock_1.userInvalidEmail);
            expect(status).to.be.equal(422);
            expect(body.message).to.equal("\"email\" must be a valid email");
        });
    });
    it('Tests if is not possible to create a new user with invalid status', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default)
                .post('/users')
                .send(users_mock_1.userInvalidStatus);
            expect(status).to.be.equal(422);
            expect(body.message).to.equal("\"status\" must be one of [Ativo, Inativo, Aguardando ativação, Desativado]");
        });
    });
});
describe('Tests of route patch /users', () => {
    let createdUserId;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            // creates a new user before each test to avoid update an existing valid user
            const { body } = yield chai_1.default.request(app_1.default)
                .post('/users')
                .send(users_mock_1.newValidUser);
            createdUserId = body.id;
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            // delete the created user to maintain the DB with valid data
            if (createdUserId) {
                yield SequelizeUser_1.default.destroy({
                    where: {
                        id: createdUserId
                    }
                });
            }
        });
    });
    it('Tests if route patch /users update a user.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, status } = yield chai_1.default.request(app_1.default)
                .patch(`/users/${createdUserId}`)
                .send(users_mock_1.updateUser);
            expect(status).to.be.equal(200);
            expect(body).to.include(users_mock_1.updateUser);
        });
    });
});
