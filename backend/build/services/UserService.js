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
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.userModel.getUsers();
                if (!allUsers) {
                    return { status: 'NOT_FOUND', data: { message: 'No users found.' } };
                }
                return { status: 'SUCCESSFUL', data: allUsers };
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
                const newUser = yield this.userModel.createUser(name, email, cpf, phone, status);
                return { status: 'CREATED', data: newUser };
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
                const updatedUser = yield this.userModel.updateUser(id, name, email, cpf, phone, status);
                return { status: 'SUCCESSFUL', data: updatedUser };
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
