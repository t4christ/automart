import express from 'express';
import { CarController } from '../controllers';
import { Car }  from '../validations';
import { verifyToken } from '../middlewares/auth'

const { postCarAd} = CarController;
const { postAdchecker} = Car;

export const carRouter = express.Router();


carRouter.post('/car', verifyToken, postAdchecker, postCarAd);



