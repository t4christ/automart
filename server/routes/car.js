import express from 'express';
import { CarController } from '../controllers';
import { Car }  from '../validations';
import { verifyToken, isAdmin } from '../middlewares/auth'
//import { cloudinaryImage } from '../config/cloudinary';
//import { upload } from '../middlewares/multer';
// import multipart from 'connect-multiparty';
// const multipartMiddleware = multipart();


const { postCarAd, getSingleCarAd, fetchAllCarAds, fetchAllUserAds, deleteSingleCarAd, editAdStatus, editAdPrice, statusSearch , statusPriceSearch, statusNewStateSearch, statusUsedStateSearch, statusManufacturerSearch, bodyTypeSearch } = CarController;
const { postAdchecker, findSpecificCarAd } = Car;

export const carRouter = express.Router();


carRouter.post('/car', verifyToken, postAdchecker, postCarAd);
carRouter.get('/car/ads', verifyToken, fetchAllUserAds);
carRouter.get('/car/:id', findSpecificCarAd, getSingleCarAd);
carRouter.get('/car', statusPriceSearch, statusNewStateSearch, statusUsedStateSearch, statusManufacturerSearch, statusSearch, bodyTypeSearch, verifyToken, isAdmin, fetchAllCarAds);
carRouter.delete('/car/:id', verifyToken, isAdmin, findSpecificCarAd, deleteSingleCarAd);
carRouter.patch('/car/:id/status', verifyToken, findSpecificCarAd, editAdStatus);
carRouter.patch('/car/:id/price', verifyToken, findSpecificCarAd, editAdPrice);






