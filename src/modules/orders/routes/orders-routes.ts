import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import OrderController from '../controller/orders-controller'

export default class OrdersRouter {
  public readonly router: Router = Router()
  private readonly controller: OrderController 

  constructor(public prismaClient: PrismaClient) {
    this.controller = new OrderController(prismaClient)
  }

  public getAll(){
    this.router.get('/all', (request: Request, response: Response) => {
      this.controller.getAll(request, response)
    })
    return this
  }

  public storeOrder(){
    this.router.post('/', (request: Request, response: Response) => {
      this.controller.storeOrder(request, response)
    })
    return this
  }
}
