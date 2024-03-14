import SequelizeUsers from '../database/models/SequelizeUser';
import { IUsers, UserStatus } from '../interfaces/IUsers';
import { IUsersModel } from '../interfaces/IUserModel';

export default class UserModel implements IUsersModel {
  private model = SequelizeUsers;

  async getUsers(): Promise<IUsers[] | null> {
    try {
      const allUsers = await this.model.findAll();
      if (allUsers.length === 0) return null;

      const usersJSON = allUsers.map((product) => product.toJSON());

      return usersJSON as IUsers[];      
    } catch(error: any) {
      console.error('Error getting the users list: ', error.message);      
      throw new Error(`Error getting the users list: ${error.message}`);
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
    const dbData = await this.model
      .update({name, email, cpf, phone, status}, {
        where: {
          id,
        },
      });

    return { id, name, email, cpf, phone, status };

  } catch (error: any) {
    console.error('Error updating the user: ', error.message);
    throw new Error(`Error updating the user: ${error.message}`);
  }
 }}