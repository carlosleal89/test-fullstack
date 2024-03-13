import { IUsers } from './IUsers';

export interface IUsersModel {
  getUsers(): Promise<IUsers[] | null>;
}