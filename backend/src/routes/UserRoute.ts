import UserController from '../controllers/UserController';
import { Request, Response, Router } from 'express';
import { validateCpf } from '../validations/middlewares/validateCpf';

const router = Router();

const userController = new UserController();

router.get('/', (req: Request, res: Response) => 
  userController.getUsers(req, res));

router.post('/', validateCpf, (req: Request, res: Response) =>
  userController.createUser(req, res));
  
router.patch('/:id', validateCpf, (req: Request, res: Response) =>
  userController.updateUser(req, res));  

export default router;