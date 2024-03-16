import React, { useState, useEffect, ChangeEvent, useContext } from 'react';
import api from '../api';
import { useHistory, useLocation } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { validateUser } from '../validations/inputValidator';
import Swal from 'sweetalert2';

function UserForm() {
  const history = useHistory();
  const { pathname } = useLocation();
  const { userById } = useContext(UserContext);
  const [ location, setLocation ] = useState('');
  const [ userData, setUserData] = useState({
    id: 0,
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: '',
  });  
  
  // tipar o state

  useEffect(() => {
    if (pathname === '/new-user') {
      setLocation('Criar');
    } else {
      setLocation('Editar');      
      setUserData({...userById})
    }    
  }, [userById])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      const reqBody = {
        name: userData.name,
        email: userData.email,
        cpf: userData.cpf,
        phone: userData.phone,
        status: userData.status
      }
      const validateError = validateUser(
        reqBody.name,
        reqBody.email,
        reqBody.phone,
        reqBody.status,
        reqBody.cpf
        );
      if (validateError) {        
        Swal.fire({
          title: 'Verifique os dados!',
          text: validateError.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }
      if (location === 'Criar') {
        await api.post('users/', reqBody);
      } else {        
        await api.patch(`users/${userData.id}`, reqBody);        
      }
      Swal.fire({
        title: 'Sucesso!',
        text: location === 'Criar' ? 'Usuário criado!' : 'Dados atualizados!',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        history.push('/');
      });
    } catch (error: any) {
      console.error(error.message);
      if (error.response.data.message.includes('Validation error')) {
        Swal.fire({
          title: 'Verifique os dados!',
          text: 'CPF já cadastrado.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      
    }
  }

  return (
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input type="text" id="name" placeholder="Nome"
          name="name" value={userData.name} onChange={handleChange} />
        
        <label htmlFor="email" />
        <input type="text" id="email" placeholder="Email"
          name="email" value={userData.email} onChange={handleChange} />

        <label htmlFor="cpf" />
        <input type="text" id="cpf" placeholder="CPF"
          name="cpf" value={userData.cpf} onChange={handleChange} />

        <label htmlFor="phone" />
        <input type="text" id="phone" placeholder="Telefone"
          name="phone" value={userData.phone} onChange={handleChange} />
        
        <label htmlFor="status" />
        <select id="status" name="status" value={userData.status}
          onChange={handleChange}>
        <option value="">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
          <option value="Desativado">Desativado</option>
        </select>
        <div>
          <button
            type="submit"
            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              {location}
          </button>
          <button
            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
            onClick={() => history.push('/')}>
              Voltar
          </button>          
        </div>     
      </form>
  )
}

export default UserForm