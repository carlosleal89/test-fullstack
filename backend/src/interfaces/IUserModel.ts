import { IUsers, UserStatus } from './IUsers';

export interface IUsersModel {
  getUsers(): Promise<IUsers[] | null>;
  createUser(
    name: string,
    email: string,
    cpf: string,
    phone: string,
    status: UserStatus
  ): Promise<IUsers>
}