import UserModel from '../models/UserModel';
import { IUsers } from '../interfaces/IUsers';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IUsersModel } from '../interfaces/IUserModel';

export default class UserService {
  constructor(
    private userModel: IUsersModel = new UserModel(),
  ) {}

  public async getUsers(): Promise<ServiceResponse<IUsers[]>> {
    try {
      const allUsers = await this.userModel.getUsers();
      if (!allUsers) {
        return { status: 'NOT_FOUND', data: { message: 'No users found.' }};
      }

      return { status: 'SUCCESSFUL', data: allUsers };

    } catch (error: any) {
      console.error('ERROR: ', error.message);
      return { status: 'INTERNAL_SERVER_ERROR',
        data: { message: 'An error occurred while processing your request' }};
     }
  }
}