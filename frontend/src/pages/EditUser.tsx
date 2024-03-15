import React, { useContext, useEffect } from 'react';
import UserForm from '../components/UserForm';
import { useParams  } from 'react-router-dom';
import UserContext from '../context/UserContext';
import api from '../api';

function EditUser() {
  const { setUserById } = useContext(UserContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getUserById = async () => {
      const { data } = await api.get(`users/${id}`);      
      setUserById(data);     
    };
    getUserById();
  }, []);
  
  return (
    <div>
      <h2>Editar usuário:</h2>
      <p>Edite os campos que desejar para modificar os dados do usuário:</p>
      <UserForm />
    </div>
  )
}

export default EditUser