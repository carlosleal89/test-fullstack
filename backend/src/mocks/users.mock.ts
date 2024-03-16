export const usersListMock = [
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
];

export const newValidUser = {
  "name": "Nemesis",
	"email": "nemesis@umbrella.com",
	"cpf": "06655566556",
	"phone": "51 9999-9999",
	"status": "Aguardando ativação"
};

export const userWithExistingCPF = {
  name: 'QuiGon Jinn',
  email: 'quigon@master.com',
  cpf: '06628787041',
  phone: '89 99999-9999',
  status: 'Desativado'
};

export const userInvalidEmail = {
  name: 'QuiGon Jinn',
  email: 'quigon@master',
  cpf: '06628787041',
  phone: '89 99999-9999',
  status: 'Desativado'
};

export const userInvalidCPF = {
  name: 'QuiGon Jinn',
  email: 'quigon@master.com',
  cpf: '066287870',
  phone: '89 99999-9999',
  status: 'Desativado'
};

export const userInvalidStatus = {
  name: 'QuiGon Jinn',
  email: 'quigon@master.com',
  cpf: '06628787041',
  phone: '89 99999-9999',
  status: 'test'
};

export const updateUser = {
  "name": "Nemesis The Stars Hunter",
	"email": "nemesis@umbrella.com",
	"cpf": "06655566556",
	"phone": "51 8456-7789",
	"status": "Ativo"
}