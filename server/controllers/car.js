import { cars} from '../datastore';


/**
 * Class representing CarController
 * @class CarController
 */
export class CarController {
  /**
   * Post car Ad
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof CarController
   */
  
  static postCarAd(req, res) {
    const { state, status = 'unsold', price, manufacturer, model, bodytype, imageurl } = req.body;

    const id = cars[cars.length - 1].id + 1;
    const createdon = new Date();
    
    const owner = req.authData.payload.id

    const newCarAd = {
      id,
      owner,
      createdon,
      manufacturer,
      model,
      price,
      state,
      status,
      bodytype,
      imageurl
    };
    cars.push(newCarAd);
    return res.status(201).json({
      status: 201,
      data: { newCarAd }
    });
  }

 

  /**
   * Edit status of posted Ad
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof CarController
   */

  static editAdStatus(req, res) {
    const { foundCar } = req.body;
    if (foundCar.status === 'sold') {
      return res.status(422).json({
        status: 422,
        error: 'This ad has already been marked as sold'
      });
    }
    foundCar.status = 'sold'
    return res.status(200).json({
      status: 200,
      data: foundCar
    });
  }  
};