import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import ProductService from '../service/products-service';

export default class ProductController {
  private readonly service: ProductService 

  constructor(public prismaClient: PrismaClient) {
    this.service = new ProductService(prismaClient)
  }

  //fetch all products
  public async getAll(request: Request, response: Response){
    try{
      const products = await this.service.getAll();
      
      return response.json(products).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

  //store shopify products
  public async storeProducts(request: Request, response: Response){
    try{
      const products = await this.service.storeProducts();
      
      return response.json(products).status(200);
    } catch (error: any) {
      return response.json({
        error: error.message
      }).status(500)
    }
  }

}
