import React, { useState } from 'react';
import api from '../api';

function UserForm() {
  const [ userData, setUserData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    status: '',
  });

  // tipar o state

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // o botão de submeter o form deve ter o texto alterado de acordo com a rota.

  // esse componente deve receber via props o tipo de operação sera realizado.
  // quando for para editar, devera receber os dados do usuario a ser editado de forma
  // a ja iniciar o form com os campos preenchidos. 

  return (
    <div>
      <form >
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name"
          name="name" value={userData.name} onChange={handleChange} />
        
        <label htmlFor="email">Email:</label>
        <input type="text" id="email"
          name="email" value={userData.email} onChange={handleChange} />

        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf"
          name="cpf" value={userData.cpf} onChange={handleChange} />

        <label htmlFor="phone">Telefone:</label>
        <input type="text" id="phone"
          name="phone" value={userData.phone} onChange={handleChange} />
        
        <label htmlFor="status">Status:</label>
        <input type="text" id="status"
          name="status" value={userData.status} onChange={handleChange} />
        
        <button type="submit" className="button-form">Salvar</button>
      </form>
    </div>
  )
}

export default UserForm