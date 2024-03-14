import UserController from '../controllers/UserController';
import { Request, Response, Router } from 'express';

const router = Router();

const userController = new UserController();

router.get('/', (req: Request, res: Response) => 
  userController.getUsers(req, res));

router.post('/', (req: Request, res: Response) =>
  userController.createUser(req, res));
  
router.patch('/:id', (req: Request, res: Response) =>
  userController.updateUser(req, res));  

export default router;