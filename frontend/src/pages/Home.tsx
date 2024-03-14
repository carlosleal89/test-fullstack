import React, { useEffect, useState } from 'react';
import api from '../api';
import Loading from '../components/Loading';
import { IUsers } from '../interfaces/IUser';


function Home() {
  const [ usersList, setUsersList ] = useState<IUsers[]>([]);
  
  useEffect(() => {
    const getUserList = async () => {
      const { data } = await api.get('users/');
      setUsersList(data);
    };
    getUserList();
  }, [])

  return (
    <div>
      {
        usersList.map((userEl) => (
          <div key={userEl.id}>
            <p>{ userEl.name }</p>
            <p>{ userEl.email }</p>
            <p>{ userEl.cpf }</p>
            <p>{ userEl.phone }</p>
            <p>{ userEl.status }</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home