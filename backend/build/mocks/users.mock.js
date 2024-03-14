"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWithExistingCPF = exports.newValidUser = exports.usersListMock = void 0;
exports.usersListMock = [
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
];
exports.newValidUser = {
    "name": "Carlos Leal",
    "email": "carlos@tst.com",
    "cpf": "066.555.665-56",
    "phone": "(51) 9999-9999",
    "status": "Ativo"
};
exports.userWithExistingCPF = {};
