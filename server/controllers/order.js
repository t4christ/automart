//import { users, cars, orders } from '../datastore';
import db from '../config/config';
import { postOrderQuery, findOrderQuery, updateOrderQuery, allUserOrdersQuery, fetchSingleCarAdQuery } from '../config/sql';

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
   
   //For dB, user should not be able to order a car he/she posted.

    static async postOrder(req, res) {
        const { car_id, amount } = req.body;
        const buyer = req.authData.payload.id;
        const value = Number(car_id);

        // user should not be able to buy car/Ad he/she posted
        try {
            const { rows, rowCount } = await db.query(fetchSingleCarAdQuery, [value]);
            if (rowCount === 0) {
                return res.status(404).json({
                    status: 404,
                    error: 'Invalid car id'
                });
            }
            // if(rows[0].owner === buyer) {
            //     return res.status(401).json({
            //         status: 401,
            //         error: 'You can not order for a car you posted'
            //     });
            // }
            const result = await db.query(postOrderQuery, [buyer, value, amount]);
            if(result.rowCount !== 0) {
                let price = rows[0].price;
                const { id, buyerid, carid, amount, status, createdon } = result.rows[0];
                const data = {
                    id,
                    carid,
                    createdon,
                    status,
                    price,
                    amount
                }
                return res.status(201).json({
                    status: 201,
                    data: data
                });
            }
        } catch(error) {
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
        // if (foundCar.owner !== id) {
        //     try {
        //         const { rows, rowCount } = await db.query(postOrderQuery, [buyer, foundCar.id, priceOffered]);
        //         if (rowCount !== 0) {
        //             const price = foundCar.price;
        //             const { id, buyerid, carid, amount, status, createdon } = rows[0];
        //             const result = {
        //                 id,
        //                 carid,
        //                 createdon,
        //                 status,
        //                 price,
        //                 priceOffered
        //             }
        //             return res.status(201).json({
        //                 status: 201,
        //                 data: result
        //             });
        //         }
        //     } catch (error) {
        //         return res.status(500).json({
        //             status: 500,
        //             error: error.message
        //         });
        //     }
        // } return res.status(401).json({
        //     status: 401,
        //     error: 'You can not buy a car you posted'
        // });




    }

   /**
   * Edit order price
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof OrderController
   */

    static async editOrderPrice(req, res) {
        const { price } = req.body;

        if (!price || !/^\d+$/.test(price)) {
            return res.status(400).json({
                status: 400,
                error: 'new price offered should be numbers only'
            });
        }

        let oldPriceOffered;
        const value  = Number(req.params.orderId);
        const { id } = req.authData.payload;
        try {
            const { rows, rowCount } = await db.query(findOrderQuery, [value, id]);
            if (rowCount === 0) {
                return res.status(404).json({
                    status: 404,
                    error: 'Order does not exist'
                });
            }
            const price = rows[0].amount;
            if(rowCount !== 0 && rows[0].status !== 'pending') {
                return res.status(422).json({
                    status: 422,
                    error: 'Sorry, this order is no longer pending'
                });
            }
            if(rowCount !== 0 && rows[0].status === 'pending') {
                const result = await db.query(updateOrderQuery, [price, value, id]);
                if(result.rowCount !== 0){
                    const { id, carid, status } = result.rows[0];
                    oldPriceOffered = price;
                    const updatedData = {
                        id,
                        carid,
                        status,
                        oldPriceOffered,
                        price
                    };
                    return res.status(200).json({
                        status: 200,
                        data: updatedData
                    });
                }
            }

        }
        catch(error){
            return res.status(500).json({
                status: 500,
                error: error.message
            });
        }
        // const foundUser = users.find(user => user.email === email);
        // const userId = foundUser.id
        // const foundOrder = orders.find(order => order.id === Number(orderId) && order.buyerId === userId);

        // if (!foundOrder) {
        //     return res.status(404).json({
        //         status: 404,
        //         error: 'Order is not available'
        //     });
        // }
        // if (foundOrder && foundOrder.status === 'pending') {
        //     oldPriceOffered = foundOrder.amount;

        //     id = foundOrder.id;
        //     carId = foundOrder.carId;
        //     status = foundOrder.status;
        //     const updatedOrder = {
        //         id,
        //         carId,
        //         status,
        //         oldPriceOffered,
        //         newPriceOffered
        //     };
        //     return res.status(200).json({
        //         status: 200,
        //         data:  updatedOrder 
        //     });
        // }
        // return res.status(422).json({
        //     status: 422,
        //     error: 'Sorry, this order is no longer pending'
        // });

    }

/**
   * Get All user orders
   * @static
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @return {object} JSON object representing success
   * @memeberof OrderController
*/

static async getAllUserOrders(req, res) {
    const { id } = req.authData.payload;
    try {
        const { rows, rowCount } = await db.query(allUserOrdersQuery, [id]);
        if (rowCount === 0) {
            return res.status(404).json({
                status: 404,
                error: 'You have no orders at this time'
            });
        }
        return res.status(200).json({
            status: 200,
            data: rows
        });
    }
    catch(error){
        return res.status(500).json({
            status: 500,
            error: error.message
        });
    }
}

}