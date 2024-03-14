"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.userInvalidStatus = exports.userInvalidCPF = exports.userInvalidEmail = exports.userWithExistingCPF = exports.newValidUser = exports.usersListMock = void 0;
exports.usersListMock = [
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
];
exports.newValidUser = {
    "name": "Nemesis",
    "email": "nemesis@umbrella.com",
    "cpf": "066.555.665-56",
    "phone": "(51) 9999-9999",
    "status": "Aguardando ativação"
};
exports.userWithExistingCPF = {
    name: 'QuiGon Jinn',
    email: 'quigon@master.com',
    cpf: '066.287.870-41',
    phone: '(89) 99999-9999',
    status: 'Desativado'
};
exports.userInvalidEmail = {
    name: 'QuiGon Jinn',
    email: 'quigon@master',
    cpf: '066.287.870-41',
    phone: '(89) 99999-9999',
    status: 'Desativado'
};
exports.userInvalidCPF = {
    name: 'QuiGon Jinn',
    email: 'quigon@master.com',
    cpf: '066.287.870',
    phone: '(89) 99999-9999',
    status: 'Desativado'
};
exports.userInvalidStatus = {
    name: 'QuiGon Jinn',
    email: 'quigon@master.com',
    cpf: '066.287.870-41',
    phone: '(89) 99999-9999',
    status: 'test'
};
exports.updateUser = {
    "name": "Nemesis The Stars Hunter",
    "email": "nemesis@umbrella.com",
    "cpf": "066.555.665-56",
    "phone": "(51) 8456-7789",
    "status": "Ativo"
};
