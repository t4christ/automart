import express from 'express';
import { UserController } from '../controllers';
import { User }  from '../validations';
import { verifyToken , isAdmin } from '../middlewares/auth';

const { register, login, getAllUsers, deleteUser, giveAdminRight, resetPassword } = UserController;
const { registerCheck, loginCheck } = User;

export const userRouter = express.Router();

userRouter.post('/auth/signup', registerCheck, register);
userRouter.post('/auth/signin', loginCheck, login);
userRouter.get('/admin/users', verifyToken, isAdmin, getAllUsers);
userRouter.delete('/admin/delete', verifyToken, isAdmin, deleteUser);
userRouter.patch('/admin/role', verifyToken, isAdmin, giveAdminRight);
userRouter.post('/reset', resetPassword);