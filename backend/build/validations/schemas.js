"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const UserStatus = {
    Ativo: 'Ativo',
    Inativo: 'Inativo',
    AguardandoAtivacao: 'Aguardando ativação',
    Desativado: 'Desativado',
};
exports.createUserValidator = joi_1.default.object({
    name: joi_1.default.string()
        .regex(/^[a-zA-Z\s]*$/)
        .message('"Nome" não pode conter números ou caracteres especiais')
        .min(4)
        .message('"Nome" deve ter pelo menos 4 caracteres.')
        .max(250)
        .required(),
    email: joi_1.default.string()
        .email({ tlds: { allow: false } })
        .message('"Email" incorreto')
        .required(),
    phone: joi_1.default.string()
        .pattern(/^\d{2}\s\d{5}-\d{4}|\d{2}\s\d{4}-\d{4}$/)
        .message('"Telefone" deve estar no formato xx xxxx-xxxx ou xx xxxxx-xxxx')
        .required(),
    status: joi_1.default.string()
        .valid(...Object.values(UserStatus))
        .required(),
});
// the regular expression above validates strings
// in the following formats '(xx) xxxx-xxxx' or '(xx) xxxxx-xxxx'
