import React, { useState, useEffect } from 'react';
import api from '../api';
import { useHistory, useLocation } from 'react-router-dom';

function UserForm() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [ location, setLocation ] = useState('');
  const [ userData, setUserData] = useState({
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
    }    
  }, [])

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClick = (url: string): void => {
    history.push(url)
  }

  // esse componente deve receber via props o tipo de operação sera realizado.
  // quando for para editar, devera receber os dados do usuario a ser editado de forma
  // a ja iniciar o form com os campos preenchidos. 

  return (
    <div>
      <form >
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
        <button type="submit" className="button-form">{location}</button>
        <button onClick={() => handleClick('/')}>Voltar</button>
      </form>
    </div>
  )
}

export default UserForm