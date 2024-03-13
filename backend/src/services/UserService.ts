import UserModel from '../models/UserModel';
import { IUsers, UserStatus } from '../interfaces/IUsers';
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

  public async createUser(
    name: string,
    email: string,
    cpf: string,
    phone: string,
    status: UserStatus): Promise<ServiceResponse<IUsers>> {
      try {
        const newUser = await this.userModel.createUser(
          name, email, cpf, phone, status);
        
        return { status: 'CREATED', data: newUser };
         
      } catch (error: any) {
        console.error('Error creating a new user: ', error.message);
        return { status: 'INTERNAL_SERVER_ERROR',
          data: { message: 'An error occurred while processing your request' }};
      }
    }
}