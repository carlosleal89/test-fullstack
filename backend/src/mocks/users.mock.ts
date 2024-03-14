export const usersListMock = [
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

export const newValidUser = {
  "name": "Nemesis",
	"email": "nemesis@umbrella.com",
	"cpf": "066.555.665-56",
	"phone": "(51) 9999-9999",
	"status": "Aguardando ativação"
};

export const userWithExistingCPF = {
  name: 'QuiGon Jinn',
  email: 'quigon@master.com',
  cpf: '066.287.870-41',
  phone: '(89) 99999-9999',
  status: 'Desativado'
};

export const userInvalidEmail = {
  name: 'QuiGon Jinn',
  email: 'quigon@master',
  cpf: '066.287.870-41',
  phone: '(89) 99999-9999',
  status: 'Desativado'
};

export const userInvalidCPF = {
  name: 'QuiGon Jinn',
  email: 'quigon@master.com',
  cpf: '066.287.870',
  phone: '(89) 99999-9999',
  status: 'Desativado'
};

export const userInvalidStatus = {
  name: 'QuiGon Jinn',
  email: 'quigon@master.com',
  cpf: '066.287.870-41',
  phone: '(89) 99999-9999',
  status: 'test'
};

export const updateUser = {
  "name": "Nemesis The Stars Hunter",
	"email": "nemesis@umbrella.com",
	"cpf": "066.555.665-56",
	"phone": "(51) 8456-7789",
	"status": "Ativo"
}