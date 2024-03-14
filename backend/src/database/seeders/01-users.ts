import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
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
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};