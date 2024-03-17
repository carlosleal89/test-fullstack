import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Alan Wake',
        email: 'alan@uol.com',
        cpf: '06628787066',
        phone: '48 99699-9977',
        status: 'Ativo'
      },
      {
        name: 'Geralt of Rivia',
        email: 'geralt@uol.com',
        cpf: '06628787079',
        phone: '89 96789-9879',
        status: 'Inativo'
      },
      {
        name: 'Luke Skywalker',
        email: 'luke@uol.com',
        cpf: '06628787099',
        phone: '99 96989-9979',
        status: 'Aguardando Ativação'
      },
      {
        name: 'Jesse Faden',
        email: 'jesse@uol.com',
        cpf: '06628787041',
        phone: '89 9955-9789',
        status: 'Desativado'
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};