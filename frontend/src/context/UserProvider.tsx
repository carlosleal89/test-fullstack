import React, { useState, useMemo } from 'react'
import UserContext from './UserContext';
import { UserProviderProps, IUsers, UserStatus } from '../interfaces/IUser';

function UserProvider({ children }: UserProviderProps) {
  const [ userById, setUserById ] = useState<IUsers>({
    id: 0,
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: UserStatus.AguardandoAtivacao,
  });

  const useContextValues = useMemo(() => ({
    userById,
    setUserById
  }), [userById])

  return (
    <UserContext.Provider value={ useContextValues }>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;