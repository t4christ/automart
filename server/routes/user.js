import express from 'express';
import { UserController } from '../controllers';
import { User }  from '../validations';

const { register} = UserController;
const { registerCheck} = User;

export const userRouter = express.Router();

userRouter.post('/auth/register', registerCheck, register);
