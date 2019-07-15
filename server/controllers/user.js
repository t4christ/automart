//import { users } from '../datastore';
import db from '../config';
import { hashSync, compareSync } from 'bcrypt';
import { createToken } from '../middlewares/auth';
import  Crypter  from '../helpers/crypt';
const { encrypt, decrypt } = Crypter;
import { createUser, queryUsersByEmail, fetchAllUsersQuery, deleteUserQuery, updateUserRoleQuery } from '../config/sql';

/**
 * Class representing UserController
 * @class UserController
 */
export class UserController {
  /**
     * Create user account on the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
  */
  static async register(req, res) {
    const {
      email, first_name, last_name, password, address
    } = req.body;
    const params = [
      email,
      first_name,
      last_name,
      hashSync(password, 10),
      address
    ];

    try {
      const { rows } = await db.query(createUser, params);
      if (rows) {
        const authUser = rows[0];
        const token = createToken(authUser);
        return res.status(201).json({
          status: 201,
          data: { token }
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  /**
     * Login user to the application
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
  */
  static async login(req, res) {
    const { email } = req.body;
    const params = [email];
    try {
      const { rows } = await db.query(queryUsersByEmail, params);
      if (rows) {
        if (rows[0]) {
          const comparePassword = compareSync(req.body.password, rows[0].password);
          if (comparePassword) {
            const authUser = rows[0];
            const token = createToken(authUser);
            return res.status(200).json({
              status: 200,
              data: { token }
            });
          }
          if (!comparePassword) {
            return res.status(401).json({
              status: 401,
              error: 'Authentication failed'
            });
          }
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  /**
     * Get all users on the application(admin)
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
  */
  static async getAllUsers(req, res) {
    try {
      const { rows, rowCount } = await db.query(fetchAllUsersQuery);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'There are no users on the application now'
        });
      } return res.status(200).json({
          status: 200,
          data: rows
      });
    } catch(error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      })
    }
  }

  /**
     * Delete a user on the application(admin)
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
  */
  static async deleteUser(req, res) {
    const { email } = req.body;
    try {
      const { rowCount } = await db.query(deleteUserQuery, [email]);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'User not found'
        });
      }
      return res.status(200).json({
        status: 200,
        data: 'User deleted successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  /**
     * Give admin right to selected user(admin)
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
  */
  static async giveAdminRight(req, res) {
    const { email } = req.body;

    try {
      const { rows, rowCount } = await db.query(queryUsersByEmail, [email]);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'User does not exist'
        });
      }
      if(rows[0].isadmin === true) {
        return res.status(422).json({
          status: 422,
          error: 'User is already an admin'
        });
      }
      const result = await db.query(updateUserRoleQuery, [true, email]);
      return res.status(200).json({
        status: 200,
        data: 'Admin right granted successfully'
      });
    } catch(error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  /**
     * Reset password function
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success
     * @memeberof UserController
  */
 static async resetPassword(req, res) {
   const { email } = req.body;
   try {
    if (!email) {
      return res.status(400).json({
        status: 400,
        error: 'Email is required'
      });
    }
    const { rows, rowCount } = await db.query(queryUsersByEmail, [email]);
    if(rowCount === 0) {
      return res.status(404).json({
        status: 404,
        error: 'User does not exist, consider signing up'
      });
    }
    const encryptedEmail = await encrypt(rows[0].email);
    //console.log('encrypt', encryptedEmail);
    const data = await sendMail(req, email, encryptedEmail);
    //console.log('data', data);
    if (data) {
      return res.status(200).json({
        status: 200,
        data: 'Check your email for password reset link'
      });
    }
    // return res.status(404).json({
    //   status: 404,
    //   error: data
    // })
   }
   catch(error){
     return res.status(500).json({
       status: 500,
       error: error.message
     });
   }
 }
}