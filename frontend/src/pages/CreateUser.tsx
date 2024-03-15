import React from 'react'
import UserForm from '../components/UserForm'

function CreateUser() {
  return (
    <div className="new-user_container">
      <h2> Novo usuário</h2>
      <p>Informe os campos a seguir para criar um novo usuário:</p>
      <UserForm />
    </div>
  )
}

export default CreateUser