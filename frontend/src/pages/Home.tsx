import React, { useEffect, useState } from 'react';
import api from '../api';
import Loading from '../components/Loading';
import { IUsers } from '../interfaces/IUser';
import { useHistory } from 'react-router-dom';
import { formatPhoneNumber, formatCPF } from '../utils/FormatData';
import '../styles/Home.css';
import setStatusIndicator from '../utils/SetStatusIndicator';

function Home() {
  const [ usersList, setUsersList ] = useState<IUsers[]>([]);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const history = useHistory();
  
  useEffect(() => {
    const getUserList = async () => {
      try {
        const { data } = await api.get('users/');
        setUsersList(data);
        setIsLoading(false);
      } catch(error: any) {
      console.error(error.message);
      setIsLoading(false);
      }
    }
    getUserList();
  }, [])

  const handleClick = (url: string): void => {
    history.push(url)
  }

  return (
    <div className="home_container">      
      <div className="mt-10 mb-10 flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Listagem de usuários</h2>
          <p className="mt-2 text-gray-400">Escolha um cliente para visualizar os detalhes</p>
        </div>
        <button
          className="mt-auto mb-auto h-10 w-30 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-1 px-4 rounded"
          onClick={() => handleClick('/new-user')}>
            Novo Cliente
        </button>
      </div>
      {usersList.length > 0 &&
        usersList.map((userEl) => (
          <div className="gap-40 mt-5 mb-5 border rounded flex justify-between py-3 px-3" key={userEl.id}>
            <div className="w-1/6">
              <p>{ userEl.name }</p>
              <p className="text-gray-400 text-sm ">{ userEl.email }</p>
            </div>
            <div className="w-1/6">
              <p>{ formatCPF(userEl.cpf) }</p>
              <p className="text-gray-400 text-sm">{ formatPhoneNumber(userEl.phone) }</p>
            </div >
            <div className="flex mt-auto mb-auto xl:w-40">
              <div style={{ backgroundColor: `${setStatusIndicator(userEl.status)}`}} className={`flex mt-auto mb-auto flex w-3 h-3 me-3 rounded-full`}></div>
              <p className="w-fit text-gray-400">{ userEl.status }</p>
            </div>
            <button
              onClick={() => handleClick(`/user/${userEl.id}`)}
              className="flex items-center justify-center ml-auto mt-auto mb-auto w-40 h-9 bg-transparent hover:bg-amber-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">
                Editar
            </button>
          </div>
        ))
      }
      {isLoading && <Loading />}
      <p className="mb-5 text-gray-400">Exibindo {usersList.length} clientes</p>
    </div>
  )
}

export default Home