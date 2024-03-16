import { ReactNode } from 'react';

export enum UserStatus {
  Ativo = 'Ativo',
  Inativo = 'Inativo',
  AguardandoAtivacao = 'Aguardando ativação',
  Desativado = 'Desativado',
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: UserStatus;
}

export interface IUserContext {
  userById: IUsers;
  setUserById: React.Dispatch<React.SetStateAction<IUsers>>;
}

export interface UserProviderProps {
  children: ReactNode;
}