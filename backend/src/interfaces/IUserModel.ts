import { IUsers, UserStatus } from './IUsers';

export interface IUsersModel {
  getUsers(): Promise<IUsers[] | null>;
  getUserById(id: number): Promise<IUsers | null>;
  createUser(
    name: string,
    email: string,
    cpf: string,
    phone: string,
    status: UserStatus
  ): Promise<IUsers>;
  updateUser(
    id: number,
    name: string,
    email: string,
    cpf: string,
    phone: string,
    status: UserStatus
  ): Promise<IUsers>;  
}