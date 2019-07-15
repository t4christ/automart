import validator from 'validatorjs';
//import { users }  from '../datastore';
import db from '../config';
import { queryUsersByEmail } from '../config/sql';

/**
 * Class representing user validations
 * @class User
 */

 export class User {
     /**
      * @param {object} req - The request object
      * @param {object} res - The response oject
      * @param {function} next 
      * @returns {object} JSON representing the failure message
      */
     static async registerCheck(req, res, next) {
         let { email, first_name, last_name, password, address } = req.body;

         const rules = {
            email: 'required|email|min:10|max:30',
            first_name: 'required|min:2|max:20|alpha',
            last_name: 'required|min:2|max:20|alpha',
            password: 'required|min:6|max:16',
            address: 'required'
         };
         
         const validation = new validator(req.body, rules);

         if (validation.fails()) {
             return res.status(400).json({
                 status: 400,
                 error: validation.errors.errors
             });
         }
         email = email.toLowerCase().trim();
         try {
           const { rows } = await db.query(queryUsersByEmail, [email]);
           if (rows[0]) {
             return res.status(409).json({
               status: 409,
               error: 'Email already exists!',
             });
           }
         } catch (error) {
           return res.status(500).json({
             status: 500,
             error: error.message,
           });
         }
         req.body.email = email;
         req.body.first_name = first_name.toLowerCase().trim();
         req.body.last_name = last_name.toLowerCase().trim();
         req.body.password = password.trim();
         req.body.address = address.trim();
         next();
     }

  /**
   * login User to the application
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next function/route handler
   * @returns {object} JSON representing the failure message.
   */
  static async loginCheck(req, res, next) {
    let { email, password } = req.body;

    const rules = {
      email: 'required|email',
      password: 'required'
    };
    const validation = new validator(req.body, rules);

    if (validation.fails()) {
      return res.status(400).json({
        status: 400,
        error: validation.errors.errors
      });
    }

    email = email.toLowerCase().trim();
    try {
      const { rows } = await db.query(queryUsersByEmail, [email]);
      if (!rows[0]) {
        return res.status(401).json({
          status: 401,
          error: 'Authentication failed',
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message,
      });
    }

    password = password.trim();
    req.body.email = email;
    req.body.password = password;
    next();
  }
 };