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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('users', [
            {
                name: 'Alan Wake',
                email: 'alan@wake.com',
                cpf: '066.287.870-66',
                phone: '(48) 99999-9999',
                status: 'Ativo'
            },
            {
                name: 'Geralt of Rivia',
                email: 'geralt@kaer.com',
                cpf: '066.287.870-79',
                phone: '(89) 99999-9999',
                status: 'Inativo'
            },
            {
                name: 'Luke Skywalker',
                email: 'luke@master.com',
                cpf: '066.287.870-99',
                phone: '(99) 99999-9999',
                status: 'Aguardando Ativação'
            },
            {
                name: 'QuiGon Jinn',
                email: 'quigon@master.com',
                cpf: '066.287.870-41',
                phone: '(89) 99999-9999',
                status: 'Desativado'
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('users', {});
    })
};
