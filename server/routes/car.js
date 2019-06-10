import express from 'express';
import { CarController } from '../controllers';
import { Car }  from '../validations';
import { verifyToken,isOwnerDummy } from '../middlewares/auth'

const { postCarAd,editAdStatus,editAdPrice,getSingleCarAd,filterSearch} = CarController;
const { postAdchecker, findSpecificCarAd } = Car;

export const carRouter = express.Router();


carRouter.post('/car', verifyToken, postAdchecker, postCarAd);
carRouter.get('/car', filterSearch, verifyToken);
carRouter.get('/car/:id', findSpecificCarAd, getSingleCarAd);
carRouter.patch('/car/:id/status', verifyToken, isOwnerDummy, findSpecificCarAd, editAdStatus);
carRouter.patch('/car/:id/price', verifyToken, isOwnerDummy, findSpecificCarAd, editAdPrice);





