import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

/**
    * Class to encrypt and decrypt
    * @returns {string}
*/
export default class Crypter {

/**
 * Function to encrypt string
 * @returns {string}
 */
    static async encrypt(string) {
      try {
        const cryptr = new Cryptr(process.env.SECRETKEY);
        const encryptedString = await cryptr.encrypt(string);
        return encryptedString;
      } catch (error) {
        throw error;
      }
    }
  
/**
 * Function to decrypt string
 * @returns {string}
 */
    static async decrypt(encryptedString) {
      try {
        const cryptr = new Cryptr(process.env.SECRETKEY);
        const string = await cryptr.decrypt(encryptedString);
        return string;
      } catch (error) {
        throw error;
      }
    }
  }
