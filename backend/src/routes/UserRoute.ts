import UserController from '../controllers/UserController';
import { Request, Response, Router } from 'express';

const router = Router();

const userController = new UserController();

router.get('/', (req: Request, res: Response) => 
  userController.getUsers(req, res));

export default router;