import {Router} from "express";
import { PrismaClient } from '@prisma/client'
import { ProductModule } from "./products/module/products-module";

const prismaClient = new PrismaClient();
const router: Router = Router();
const productModule = new ProductModule(prismaClient);


router.use('/products', productModule.productsRouter.router);

export {router}