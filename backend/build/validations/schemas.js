"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_2 = __importDefault(require("joi"));
const UserStatus = {
    Ativo: 'Ativo',
    Inativo: 'Inativo',
    AguardandoAtivacao: 'Aguardando ativação',
    Desativado: 'Desativado',
};
exports.createUserValidator = joi_2.default.object({
    name: joi_2.default.string().min(4).max(250).required(),
    email: joi_2.default.string().email().required(),
    phone: joi_2.default.string().pattern(/^\(\d{2}\)\d{4,5}-\d{4}$/)
        .message('"Telefone" deve estar no formato (xx)xxxx-xxxx ou (xx)xxxxx-xxxx').required(),
    status: joi_1.default.string().valid(...Object.values(UserStatus)).required(),
});
// the regular expression above validates strings
// in the following formats '(xx) xxxx-xxxx' or '(xx) xxxxx-xxxx'
