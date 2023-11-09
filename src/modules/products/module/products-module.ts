import ProductsRouter from "../routes/products-routes";
import { PrismaClient } from '@prisma/client'

export class ProductModule {
    public readonly productsRouter: ProductsRouter
    constructor(client: PrismaClient){
        this.productsRouter = new ProductsRouter(client);
        this.productsRouter.getAll().storeProducts();
    }

}