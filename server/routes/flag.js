import express from 'express';
import { flagAd } from '../controllers';
import { verifyToken } from '../middlewares/auth';
// import { Car }  from '../validations';
// const { findSpecificCarAd } = Car;



export const flagRouter = express.Router();


flagRouter.post('/flag', verifyToken, flagAd);






