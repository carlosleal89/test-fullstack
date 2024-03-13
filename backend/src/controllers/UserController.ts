import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusToHTTP';
import { Request, Response } from 'express';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  public async getUsers(req: Request, res: Response) {
    const ServiceResponse = await this.userService.getUsers();
    return res.status(mapStatusHTTP(ServiceResponse.status))
      .json(ServiceResponse.data);
  }
}
