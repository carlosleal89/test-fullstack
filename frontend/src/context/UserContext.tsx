import { createContext } from 'react';
import { IUsers, IUserContext } from '../interfaces/IUser';

const UserContext = createContext<IUserContext | undefined>(undefined);

export default UserContext;