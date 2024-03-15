import React, { useEffect, useState } from 'react';
import api from '../api';
import Loading from '../components/Loading';
import { IUsers } from '../interfaces/IUser';
import { useHistory } from 'react-router-dom';

function Home() {
  const [ usersList, setUsersList ] = useState<IUsers[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const history = useHistory();
  
  useEffect(() => {
    const getUserList = async () => {
      const { data } = await api.get('users/');
      setUsersList(data);
      setIsLoading(false);
    };
    getUserList();
  }, [])

  const handleClick = (url: string): void => {
    history.push(url)
  }

  return (
    <div className="home_container">      
      <div>
        <h3>Listagem de usuários</h3>
        <p>Escolha um cliente para visualizar os detalhes</p>
        <button onClick={() => handleClick('/new-user')}>Novo Cliente</button>
      </div>
      {usersList.length > 0 &&
        usersList.map((userEl) => (
          <div className="users_container" key={userEl.id}>
            <p>{ userEl.name }</p>
            <p>{ userEl.email }</p>
            <p>{ userEl.cpf }</p>
            <p>{ userEl.phone }</p>
            <p>{ userEl.status }</p>
            <button onClick={() => handleClick(`/user/${userEl.id}`)}>Editar</button>
          </div>
        ))
      }
      {isLoading && <Loading />}
      <p>Exibindo {usersList.length} clientes</p>
    </div>
  )
}

export default Home