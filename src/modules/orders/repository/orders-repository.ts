import { PrismaClient, Order } from "@prisma/client";
import { OrderSavePayload } from "../interface/orders-interface";

export class OrderRepository{
    constructor(private readonly client: PrismaClient) {}


    public all(): Promise<Array<Order>> {
        return this.client.order.findMany({})
    }

    public save(data: OrderSavePayload): Promise<Order> {
        return this.client.order.create({
          data,
        });
    }

}
