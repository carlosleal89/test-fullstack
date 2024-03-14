"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const IUsers_1 = require("../../interfaces/IUsers");
class SequelizeUsers extends sequelize_1.Model {
}
exports.default = SequelizeUsers;
SequelizeUsers.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM(...Object.values(IUsers_1.UserStatus)),
        allowNull: false,
        defaultValue: IUsers_1.UserStatus.AguardandoAtivacao
    }
}, {
    sequelize: _1.default,
    modelName: 'SequelizeUsers',
    tableName: 'users',
    timestamps: false,
    underscored: true,
    hooks: {
        beforeValidate: (user) => {
            user.name = capitalizeFirstLetterEachWord(user.name);
        },
        beforeSave: (user) => {
            user.cpf = formatCpf(user.cpf);
        }
    }
});
function capitalizeFirstLetterEachWord(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
function formatCpf(cpf) {
    if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(cpf)) {
        // format CPF to pattern 123.456.789-00
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    }
    return cpf;
}
