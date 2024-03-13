import SequelizeUsers from '../database/models/SequelizeUser';
import { IUsers } from '../interfaces/IUsers';
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
      throw new Error('Error getting the users list: check the logs for more info.');
    }
  }
}