import OrdersRouter from '../routes/orders-routes';
import { PrismaClient } from '@prisma/client'

export class OrderModule {
    public readonly productsRouter: OrdersRouter
    constructor(client: PrismaClient){
        this.productsRouter = new OrdersRouter(client);
        this.productsRouter.getAll().storeOrder();
    }

}