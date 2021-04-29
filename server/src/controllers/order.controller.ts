import { Request, Response } from 'express';
import { ValidationObject, Validator } from '../validators/validator';
import { BaseView } from '../views/view';
import { ApiError } from '../errors/api-errors';
import { orderModel } from '../models/order.model';


class OrderController {

  public async create(req: Request, res: Response) {
    const { products, user } = req.body;
    let error: ValidationObject = Validator.validateOrder(products, user);
    if (error) {
      return BaseView.buildErrorView(res, ApiError.badRequest(error.reason));
    }

    const ids = products.map(product => product.id).join(', ');
    try {
      const resultProducts = await orderModel.findProducts(ids);
      error = Validator.validateProductsCount(products, resultProducts);
      if (error) {
        return BaseView.buildErrorView(res, ApiError.badRequest(error.reason));
      }

      const userResult = await orderModel.createUser(user);
      await orderModel.create(products, userResult.id);

      return BaseView.buildSuccessView(res, []);
    } catch (e) {
      return BaseView.buildErrorView(res, ApiError.badRequest(e.message));
    }
  }
}

export const orderController = new OrderController();
