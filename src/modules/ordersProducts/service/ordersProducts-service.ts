import { PrismaClient } from "@prisma/client";
import OrdersProductsRepository from "../repository/ordersProducuts-repository";
import { OrderProductsSavePayload } from "../interface/ordersProducts-interface";

export default class OrderProductsService {
    private readonly orderProductsRepository: OrdersProductsRepository;

    constructor(public prismaClient: PrismaClient){
        this.orderProductsRepository = new OrdersProductsRepository(prismaClient);
    }
    
    async storeOrder(payload: OrderProductsSavePayload){
        const order = await this.orderProductsRepository.store(payload);
        if(!order) throw Error("Error while trying to store order in the database.");
        
        return order;
    }
}
