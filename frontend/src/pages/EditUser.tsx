import React, { useContext, useEffect } from 'react';
import UserForm from '../components/UserForm';
import { useParams  } from 'react-router-dom';
import UserContext from '../context/UserContext';
import api from '../api';

function EditUser() {
  const { setUserById } = useContext(UserContext);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    try {
      const getUserById = async () => {
        const { data } = await api.get(`users/${id}`);      
        setUserById(data);     
      };
      getUserById();
    } catch(error: any) {
      console.error(error.message)
    }
  }, []);
  
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">Editar usuário:</h2>
      <p className="text-gray-400">Edite os campos que desejar para modificar os dados do usuário:</p>
      <UserForm />
    </div>
  )
}

export default EditUser