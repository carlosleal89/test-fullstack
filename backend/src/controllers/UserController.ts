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

  public async createUser(req: Request, res: Response) {
    const { name, email, cpf, phone, status } = req.body;
    const ServiceResponse = await this.userService.createUser(
      name, email, cpf, phone, status
    )

    return res.status(mapStatusHTTP(ServiceResponse.status))
    .json(ServiceResponse.data);
  }

  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const ServiceResponse = await this.userService.getUserById(Number(id));
    console.log(ServiceResponse);
    

    return res.status(mapStatusHTTP(ServiceResponse.status))
    .json(ServiceResponse.data);
  }

  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, cpf, phone, status } = req.body;
    const ServiceResponse = await this.userService.updateUser(
      Number(id), name, email, cpf, phone, status
    );

    return res.status(mapStatusHTTP(ServiceResponse.status))
    .json(ServiceResponse.data);
  }
}
