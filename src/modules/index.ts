import {Router} from "express";
import { PrismaClient } from '@prisma/client'
import { ProductModule } from "./products/module/products-module";
import { OrderModule } from "./orders/module/orders-module";

const prismaClient = new PrismaClient();
const router: Router = Router();
const productModule = new ProductModule(prismaClient);
const orderModule = new OrderModule(prismaClient);


router.use('/products', productModule.productsRouter.router);
router.use('/orders', orderModule.productsRouter.router);

export {router}