import express from 'express';
import { router as userRouter } from './user.router';
import { router as productsRouter } from './products.router';
import { router as orderRouter } from './order.router';

const router = express.Router();

// router.use('/user', customValidator, userRouter );
router.use('/user', userRouter);
router.use('/products', productsRouter);
router.use('/order', orderRouter);

export default router;
