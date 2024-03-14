import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { UserStatus } from '../../interfaces/IUsers';

export default class SequelizeUsers extends Model<InferAttributes<SequelizeUsers>,
InferCreationAttributes<SequelizeUsers>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare cpf: string;
  declare phone: string;
  declare status: UserStatus;
}

SequelizeUsers.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM(...Object.values(UserStatus)),
    allowNull: false,
    defaultValue: UserStatus.AguardandoAtivacao
  }
}, {
  sequelize: db,
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

function capitalizeFirstLetterEachWord(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatCpf(cpf: string) {
  if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(cpf)) {
    // format CPF to pattern 123.456.789-00
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }
  return cpf;
}

