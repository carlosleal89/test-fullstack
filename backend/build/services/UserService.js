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
const UserModel_1 = __importDefault(require("../models/UserModel"));
const inputValidator_1 = require("../validations/inputValidator");
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.userModel.getUsers();
                if (!allUsers) {
                    return { status: 'NO_CONTENT', data: { message: '' } };
                }
                return { status: 'SUCCESSFUL', data: allUsers };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (error) {
                console.error('ERROR: ', error.message);
                return { status: 'INTERNAL_SERVER_ERROR',
                    data: { message: error.message } };
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userById = yield this.userModel.getUserById(id);
                if (!userById) {
                    return { status: 'NO_CONTENT', data: { message: '' } };
                }
                return { status: 'SUCCESSFUL', data: userById };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (error) {
                console.error('ERROR: ', error.message);
                return { status: 'INTERNAL_SERVER_ERROR',
                    data: { message: error.message } };
            }
        });
    }
    createUser(name, email, cpf, phone, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validateError = (0, inputValidator_1.validateUser)(name, email, phone, status);
                if (validateError) {
                    return { status: validateError.status, data: { message: validateError.message } };
                }
                const newUser = yield this.userModel.createUser(name, email, cpf, phone, status);
                return { status: 'CREATED', data: newUser };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any   
            }
            catch (error) {
                console.error('Error creating a new user: ', error.message);
                return { status: 'INTERNAL_SERVER_ERROR',
                    data: { message: error.message } };
            }
        });
    }
    updateUser(id, name, email, cpf, phone, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validateError = (0, inputValidator_1.validateUser)(name, email, phone, status);
                if (validateError) {
                    return { status: validateError.status, data: { message: validateError.message } };
                }
                const updatedUser = yield this.userModel.updateUser(id, name, email, cpf, phone, status);
                return { status: 'SUCCESSFUL', data: updatedUser };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any   
            }
            catch (error) {
                console.error('Error creating a updating user: ', error.message);
                return { status: 'INTERNAL_SERVER_ERROR',
                    data: { message: error.message } };
            }
        });
    }
}
exports.default = UserService;
