import express from 'express';
import { OrderController } from '../controllers';
import { Order, Car }  from '../validations';
import { verifyToken } from '../middlewares/auth'

const { postOrder, editOrderPrice, getAllUserOrders } = OrderController;
const { postOrderChecker } = Order;
const { findSpecificCarAd } = Car;

export const orderRouter = express.Router();


orderRouter.post('order', verifyToken, postOrderChecker, postOrder);
orderRouter.patch('order/:orderId/price', verifyToken, editOrderPrice);
orderRouter.get('order', verifyToken, getAllUserOrders);





