import { createContext } from 'react';
import { IUserContext } from '../interfaces/IUser';
import { UserStatus } from '../interfaces/IUser';

const defaultUserContext: IUserContext = {
  userById: {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: UserStatus.AguardandoAtivacao,
  },
  setUserById: () => {}
};

const UserContext = createContext<IUserContext>(defaultUserContext);

export default UserContext;