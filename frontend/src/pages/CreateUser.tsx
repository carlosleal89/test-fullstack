import React from 'react';
import UserForm from '../components/UserForm';

function CreateUser() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold"> Novo usuário</h2>
      <p className="text-gray-400">Informe os campos a seguir para criar um novo usuário:</p>
      <UserForm />
    </div>
  )
}

export default CreateUser