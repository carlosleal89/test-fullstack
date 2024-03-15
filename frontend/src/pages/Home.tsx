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
      <h1>Painel de Clientes</h1>
      <div>
        <h3>Listagem de usuários</h3>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <button>Novo Cliente</button>
      </div>
      {
        usersList.map((userEl) => (
          <div className="users_container" key={userEl.id}>
            <p>{ userEl.name }</p>
            <p>{ userEl.email }</p>
            <p>{ userEl.cpf }</p>
            <p>{ userEl.phone }</p>
            <p>{ userEl.status }</p>
            <button>Editar</button>
          </div>
        ))
      }
      <p>Exibindo {usersList.length} clientes</p>
    </div>
  )
}

export default Home