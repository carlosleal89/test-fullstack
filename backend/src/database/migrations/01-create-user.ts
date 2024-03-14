import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize'; 

import { IUsers } from '../../interfaces/IUsers';

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<IUsers>>('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM('Ativo', 'Inativo', 'Aguardando ativação', 'Desativado'),
        allowNull: false,
        defaultValue: 'Aguardando ativação'
      },      
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('users');
  } 
};