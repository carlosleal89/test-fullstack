import React, { useEffect, useState } from 'react';
import api from '../api';
import Loading from '../components/Loading';
import { IUsers } from '../interfaces/IUser';
import { useHistory } from 'react-router-dom';
import { formatPhoneNumber, formatCPF } from '../utils/FormatData';

function Home() {
  const [ usersList, setUsersList ] = useState<IUsers[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const history = useHistory();
  
  useEffect(() => {
    try {
      const getUserList = async () => {
        const { data } = await api.get('users/');
        setUsersList(data);
        setIsLoading(false);
      };
      getUserList();
    } catch(error: any) {
      console.error(error.message)
    }
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
            <p>{ formatCPF(userEl.cpf) }</p>
            <p>{ formatPhoneNumber(userEl.phone) }</p>
            <p>{ userEl.status }</p>
            <button
              onClick={() => handleClick(`/user/${userEl.id}`)}
              className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                Editar
            </button>
          </div>
        ))
      }
      {isLoading && <Loading />}
      <p>Exibindo {usersList.length} clientes</p>
    </div>
  )
}

export default Home