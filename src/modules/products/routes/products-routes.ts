import { PrismaClient } from '@prisma/client'
import { Request, Response, Router } from 'express'
import ProductController from '../controller/products-controller'

export default class ProductsRouter {
  public readonly router: Router = Router()
  private readonly controller: ProductController 

  constructor(public prismaClient: PrismaClient) {
    this.controller = new ProductController(prismaClient)
  }

  public getAll(){
    this.router.get('/all', (request: Request, response: Response) => {
      this.controller.getAll(request, response)
    })
    return this
  }

  public storeProducts(){
    this.router.post('/', (request: Request, response: Response) => {
      this.controller.storeProducts(request, response)
    })
    return this
  }
}
