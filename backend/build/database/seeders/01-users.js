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
                cpf: '066287870-66',
                phone: '5548999999999',
                status: 'Ativo'
            },
            {
                name: 'Geralt of Rivia',
                email: 'geralt@kaer.com',
                cpf: '066287870-79',
                phone: '5589999999999',
                status: 'Inativo'
            },
            {
                name: 'Luke Skywalker',
                email: 'luke@master.com',
                cpf: '066287870-99',
                phone: '5599999999999',
                status: 'Aguardando Ativação'
            },
            {
                name: 'Qui-Gon Jinn',
                email: 'quigon@master.com',
                cpf: '066287870-41',
                phone: '5389999999999',
                status: 'Desativado'
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('users', {});
    })
};
