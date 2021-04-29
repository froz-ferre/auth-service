import express from 'express';
import { orderController } from '../controllers/order.controller';


export const router = express.Router();

router.post('/', orderController.create);
