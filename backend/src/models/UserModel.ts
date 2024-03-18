import SequelizeUsers from '../database/models/SequelizeUser';
import { IUsers, UserStatus } from '../interfaces/IUsers';
import { IUsersModel } from '../interfaces/IUserModel';

export default class UserModel implements IUsersModel {
  private model = SequelizeUsers;

  async getUsers(): Promise<IUsers[] | null> {
    try {
      const allUsers = await this.model.findAll();
      if (allUsers.length === 0) return null;

      return allUsers as IUsers[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(error: any) {
      console.error('Error getting the users list: ', error.message);      
      throw new Error(`Error getting the users list: ${error.message}`);
    }
  };

  async getUserById(id: number): Promise<IUsers | null> {
    try {
      const userById = await this.model.findOne({
        where: {
          id
        }
      });
      if (!userById) return null;

      return userById as IUsers;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(error: any) {
      console.error('Error getting the user by id: ', error.message);      
      throw new Error(`Error getting the user by id: ${error.message}`);
    }   
  }

  async createUser(
    name: string,
    email: string,
    cpf: string,
    phone: string,
    status: UserStatus): Promise<IUsers> {
      try {
        const dbData = await this.model
          .create({name, email, cpf, phone, status});
  
        return dbData;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error('Error creating a new user: ', error.message);
        throw new Error(`Error creating a new user: ${error.message}`);
      }
  }

  async updateUser(
    id: number,
    name: string,
    email: string,
    cpf: string,
    phone: string,
    status: UserStatus
  ): Promise<IUsers>
 {
  try {
    await this.model
      .update({name, email, cpf, phone, status}, {
        where: {
          id,
        },
      });

    return { id, name, email, cpf, phone, status };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error updating the user: ', error.message);
    throw new Error(`Error updating the user: ${error.message}`);
  }
 }}