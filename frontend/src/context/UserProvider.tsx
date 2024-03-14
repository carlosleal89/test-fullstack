import React, { useState, useMemo } from 'react'
import UserContext from './UserContext';
import { UserProviderProps, IUsers } from '../interfaces/IUser';

function UserProvider({ children }: UserProviderProps) {
  const [ usersList, setUsersList ] = useState<IUsers[]>([]);

  const useContextValues = useMemo(() => ({
    usersList,
    setUsersList
  }), [])

  // passar o estado e setState no array do useMemo?

  return (
    <UserContext.Provider value={ useContextValues }>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;