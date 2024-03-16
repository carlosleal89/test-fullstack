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
                cpf: '06628787066',
                phone: '48 99699-9977',
                status: 'Ativo'
            },
            {
                name: 'Geralt of Rivia',
                email: 'geralt@kaer.com',
                cpf: '06628787079',
                phone: '89 96789-9879',
                status: 'Inativo'
            },
            {
                name: 'Luke Skywalker',
                email: 'luke@master.com',
                cpf: '06628787099',
                phone: '99 96989-9979',
                status: 'Aguardando Ativação'
            },
            {
                name: 'QuiGon Jinn',
                email: 'quigon@master.com',
                cpf: '06628787041',
                phone: '89 9955-9789',
                status: 'Desativado'
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('users', {});
    })
};
