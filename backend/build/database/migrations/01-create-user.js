"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            name: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            email: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            cpf: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
                unique: true,
            },
            phone: {
                allowNull: false,
                type: sequelize_1.DataTypes.STRING,
            },
            status: {
                type: sequelize_1.DataTypes.ENUM('Ativo', 'Inativo', 'Aguardando Ativação', 'Desativado'),
                allowNull: false,
                defaultValue: 'Aguardando Ativação'
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('users');
    }
};
