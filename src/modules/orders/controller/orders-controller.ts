import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import OrderService from '../service/orders-service'

export default class OrderController {
  private readonly service: OrderService 

  constructor(public prismaClient: PrismaClient) {
    this.service = new OrderService(prismaClient)
  }

  //fetch all orders
  public async getAll(request: Request, response: Response){
    try{
      const orders = await this.service.getAll();
      
      return response.json(orders).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  //store a new order
  public async storeOrder(request: Request, response: Response){
    try{
      const order = await this.service.storeOrder(request.body);
      
      return response.json(order).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

}
