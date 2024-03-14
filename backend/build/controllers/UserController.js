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
const UserService_1 = __importDefault(require("../services/UserService"));
const mapStatusToHTTP_1 = __importDefault(require("../utils/mapStatusToHTTP"));
class UserController {
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ServiceResponse = yield this.userService.getUsers();
            return res.status((0, mapStatusToHTTP_1.default)(ServiceResponse.status))
                .json(ServiceResponse.data);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, cpf, phone, status } = req.body;
            const ServiceResponse = yield this.userService.createUser(name, email, cpf, phone, status);
            return res.status((0, mapStatusToHTTP_1.default)(ServiceResponse.status))
                .json(ServiceResponse.data);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, cpf, phone, status } = req.body;
            const ServiceResponse = yield this.userService.updateUser(Number(id), name, email, cpf, phone, status);
            return res.status((0, mapStatusToHTTP_1.default)(ServiceResponse.status))
                .json(ServiceResponse.data);
        });
    }
}
exports.default = UserController;
