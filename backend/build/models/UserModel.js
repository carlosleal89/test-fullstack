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
const SequelizeUser_1 = __importDefault(require("../database/models/SequelizeUser"));
class UserModel {
    constructor() {
        this.model = SequelizeUser_1.default;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.model.findAll();
                if (allUsers.length === 0)
                    return null;
                return allUsers;
            }
            catch (error) {
                console.error('Error getting the users list: ', error.message);
                throw new Error(`Error getting the users list: ${error.message}`);
            }
        });
    }
    ;
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userById = yield this.model.findOne({
                    where: {
                        id
                    }
                });
                if (!userById)
                    return null;
                return userById;
            }
            catch (error) {
                console.error('Error getting the user by id: ', error.message);
                throw new Error(`Error getting the user by id: ${error.message}`);
            }
        });
    }
    createUser(name, email, cpf, phone, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbData = yield this.model
                    .create({ name, email, cpf, phone, status });
                return dbData;
            }
            catch (error) {
                console.error('Error creating a new user: ', error.message);
                throw new Error(`Error creating a new user: ${error.message}`);
            }
        });
    }
    updateUser(id, name, email, cpf, phone, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbData = yield this.model
                    .update({ name, email, cpf, phone, status }, {
                    where: {
                        id,
                    },
                });
                return { id, name, email, cpf, phone, status };
            }
            catch (error) {
                console.error('Error updating the user: ', error.message);
                throw new Error(`Error updating the user: ${error.message}`);
            }
        });
    }
}
exports.default = UserModel;
