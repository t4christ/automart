import express from 'express';
import { CarController } from '../controllers';
import { Car }  from '../validations';
import { verifyToken,isOwnerDummy } from '../middlewares/auth'

const { postCarAd,editAdStatus} = CarController;
const { postAdchecker, findSpecificCarAd } = Car;

export const carRouter = express.Router();


carRouter.post('/car', verifyToken, postAdchecker, postCarAd);
carRouter.patch('/car/:id/status', verifyToken, isOwnerDummy, findSpecificCarAd, editAdStatus);






