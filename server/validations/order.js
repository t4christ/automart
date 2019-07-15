import { orders } from '../datastore';

/**
 * Class representing user validations
 * @class Order
 */

export class Order{

    /**
    * @param {object} req - The request object
    * @param {object} res - The response oject
    * @param {function} next 
    * @returns {object} JSON representing the failure message
    */

    static postOrderChecker(req, res, next) {
        let { amount } = req.body;
        const errors = [];

        amount = amount.trim();
        if(!amount) {
            const error = {
                message: 'please specify an amount'
            };
            errors.push(error);
        }

        if(!/^\d+$/.test(amount)) {
            const error = {
                message: 'price offered should be numbers only'
            };
            errors.push(error);
        }

        if(errors.length) {
            return res.status(400).json({
                status: 400,
                errors: {
                    body: errors.map(err => err.message)
                }
            });
        }

        req.body.amount = amount;
        next();
    }
}