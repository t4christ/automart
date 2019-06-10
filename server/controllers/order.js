import { cars, orders } from '../datastore';

/**
 * Class representing CarController
 * @class OrderController
 */
export class OrderController {
  
  /**
   * Post Order
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof OrderController
   */
   
   //For dB, user should not be able to order a car he posted.

   static postOrder(req, res) {
       const { priceOffered, carId, status = 'pending' } = req.body;

       const id = orders[orders.length - 1].id + 1;
       const createdon = new Date();

       let foundCar = cars.find(car => car.id === Number(carId));
       if(!foundCar) {
           res.status(404).json({
               status: 404,
               error: 'Car does not exist'
           });
       }
       const carIndex = foundCar.id;
       const price = foundCar.price;

       const newOrder = {
           id,
           carIndex,
           createdon,
           status,
           price,
           priceOffered
       };

       orders.push(newOrder);
       return res.status(201).json({
           status: 201,
           data: { newOrder }
       });
   }

   
}