import { PrismaClient, OrderProducts } from "@prisma/client";
import { OrderProductsSavePayload } from "../interface/ordersProducts-interface";

export default class OrdersProductsRepository {
    constructor(private readonly client: PrismaClient) {}

    async store(orderProductPayload: OrderProductsSavePayload){
        return this.client.orderProducts.create({
            data: orderProductPayload,
        });
    }
}