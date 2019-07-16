//import validator from 'validatorjs';
//import { cars } from '../datastore';
import 'dotenv/config';
import db from '../config';
import { fetchSingleCarAdQuery } from '../config/sql';
//import { uploader, cloudinaryConfig } from '../config/cloudinary';
//import { multerUploads, dataUri } from '../middlewares/multer';

/**
 * Class representing user validations
 * @class Car
 */

//  export class Car {
//      /**
//       * @param {object} req - The request object
//       * @param {object} res - The response oject
//       * @param {function} next 
//       * @returns {object} JSON representing the failure message
//       */

//       static postAdCheck(req, res, next) {
//           let { state, price, manufacturer, model, body_type } = req.body;

//           const rules = {
//               state: 'required|alpha:in:new,used',
//             //   status: 'required|alpha:in:sold,unsold',
//               price: 'required|integer|min:1',
//               manufacturer: 'required|alpha',
//               model: 'required|alpha',
//               body_type: 'required|alpha'
//           };

//           const validation = new validator(req.body, rules);

//           if (validation.fails()) {
//               return res.status(400).json({
//                   status: 400,
//                   error: validation.errors.errors
//               });
//           }
//           if (state.toLowerCase().trim() !== 'new' && state.toLowerCase().trim() !== 'used') {
//               return res.status(400).json({
//                   status: 400,
//                   error: 'State can only be new or used'
//               });
//           }
//         //   if (status.toLowerCase.trim() !== 'sold' || status.toLowerCase.trim() !== 'unsold') {
//         //       return res.status(400).json({
//         //           status: 400,
//         //           error: 'Status can only be sold or unsold'
//         //       });
//         //   }
//           req.body.state = state.toLowerCase().trim();
//         //   req.body.status = state.toLowerCase().trim();
//           req.body.price = price.trim()
//           req.body.manufacturer = manufacturer.toLowerCase().trim();
//           req.body.model = model.toLowerCase().trim();
//           req.body.body_type = body_type.toLowerCase().trim();
//           req.authData;
//           return next();
//       }
//  }

export class Car {
    static async postAdchecker(req, res, next) {
        //console.log('req.file', req.file);
        let { state, price, manufacturer, model, body_type, img_url } = req.body;
        console.log('body request', req.body);
        console.log("type of price",typeof price)
        const errors = [];
        if (!state) {
            const error = {
                message: 'Please specify the state of the car'
            };
        
            errors.push(error);
        }
        if (state) {
            state = state.trim();
            if (state.toLowerCase() !== 'new' && state.toLowerCase() !== 'used') {
                const error = {
                    message: 'State can only be new or used'
                };
                errors.push(error);
            }

        }


        if (!price) {
            const error = {
                message: 'You will need to specify a sale price'
            };
            errors.push(error);
        }
        if (price) {
            // price = price.trim();
            if (!/^\d+$/.test(price)) {
                const error = {
                    message: 'Price should be numbers only'
                };
                errors.push(error);
            }
        }

        if (!manufacturer) {
            const error = {
                message: 'Specify a manufacturer'
            };
            errors.push(error);
        }

        if (manufacturer) {
            manufacturer = manufacturer.trim();
            if (/[^a-zA-Z]/.test(manufacturer)) {
                const error = {
                    message: 'Manufacturer field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!model) {
            const error = {
                message: 'Specify the model of the vehicle'
            };
            errors.push(error);
        }

        if (model) {
            model = model.trim();
            if (/[^a-zA-Z]/.test(model)) {
                const error = {
                    message: 'Model field accepts alphabets only'
                };
                errors.push(error);
            }
        }

        if (!body_type) {
            const error = {
                message: 'You will need to specify a body_type'
            };
            errors.push(error);
        }

        if (body_type) {
            body_type = body_type.trim();
            if (/[^a-zA-Z]/.test(body_type)) {
                const error = {
                    message: 'body_type field accepts alphabets only'
                };
                errors.push(error);
            }
        }
        
        // if (req.file) {
        //     const file = await bufferToString(req.file).content;
        //     const result = await uploader.upload(file);
        //     const image = result.url;
        //     img_url = image;
        // }

        // errors.push(e)
        // if (!img_url || !req.file) {
        //     const error = {
        //         message: 'Please upload an image for this vehicle'
        //     };
        //     errors.push(error);
        // }

        if (!img_url) {
            const error = {
                message: 'You need to upload an image for this car'
            };
            errors.push(error);
        }
        
        if(img_url) {
            let extension;
            extension = img_url.split('.').pop();
            extension = extension.replace(/'/g,'').trim();
            extension = extension.toLowerCase();
            const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
                if(!validImageExtensions.includes(extension)) {
                    const error = {
                        message: 'This image is not a valid image'
                    };
                    errors.push(error);
                }
            }

        // if(img_url){
        //     img_url = img_url.trim().replace(/\s\s+/g, '');
        //     img_url = img_url.split('.');
        //     const validImage = img_url[img_url.length - 1];
        //     if(validImage.toLowerCase() !== 'jpg' && validImage.toLowerCase() !== 'jpeg' && validImage.toLowerCase() !== 'png' && validImage.toLowerCase() !== 'gif') {
        //         const error = {
        //             message: 'This image is not a valid image'
        //         };
        //         errors.push(error)
        //     }
        // }

        if (errors.length) {
            return res.status(400).json({
                status: 400,
                errors: {
                    body: errors.map(err => err.message)
                }
            });
        }



        //console.log('errors', errors);
        req.body.state = state.toLowerCase().trim();
        req.body.price = price;
        req.body.manufacturer = manufacturer.toLowerCase();
        req.body.model = model.toLowerCase();
        req.body.body_type = body_type.toLowerCase();
        req.body.img_url = img_url;
        next();
    }

    // /**
    //  * 
    //  * @param {object} req 
    //  * @param {string} res 
    //  * @param {function} next 
    //  */

    //  static async uploadCarImage(req, res, next) {
    //      console.log('req.file', req.file);
    //      //if(!req.file === 'undefined') {console.log('problem')};
    //      let img_url;
    //      if (req.file) {
    //          try{
    //             const file = await bufferToString(req.file).content;
    //             const result = await uploader.upload(file);
    //             let image = result.url;
    //             req.body.img_url = image;
    //             next();
    //          } catch(error) {
    //              return res.status(400).json({
    //                  status: 400,
    //                  error
    //              })
    //          }
    //     }
    //     return res.status(400).json({
    //         status: 400,
    //         message: 'Why are you trying to upload an empty field?'
    //       });
    //  }


  /**
   * Fetch Specific Car On to the application
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message.
   */
    static async findSpecificCarAd(req, res, next) {
        const { id } = req.params;
        if (/[a-zA-Z]/.test(id)) {
            return res.status(400).json({
                status: 400,
                error: 'Invalid entry'
            });
        }
        const value = Number(id);

        try {
            const { rows, rowCount } = await db.query(fetchSingleCarAdQuery, [value]);
            if (rowCount === 0) {
                return res.status(404).json({
                    status: 404,
                    error: 'Car not found'
                });
            }
            const foundCar = rows[0];
            req.body.foundCar = foundCar;
            next();
        } catch(error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
        //next();
    }
    //next();
}
/**
 * Added the nexts to check for proper positioning.
 */






//  static async checkUndefinedPass(request, response, next) {
//     const { password } = request.body;
//     const errors = [];
//     if (password === undefined) {
//       const error = {
//         message: 'Please add a password field'
//       };
//       errors.push(error);
//       return response.status(400).json({
//         errors: { body: errors.map(err => err.message) }
//       });
//     }
//     request.body.password = password.trim();
//     next();
//   }

