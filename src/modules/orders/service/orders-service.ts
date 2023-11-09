import { PrismaClient } from '@prisma/client'
import { OrderRepository } from '../repository/orders-repository'
import { OrderSavePayloadDTO } from '../interface/orders-interface';
import ProductService from '../../products/service/products-service';
import OrderProductsService from '../../ordersProducts/service/ordersProducts-service';

export default class OrderService{

    private readonly orderRepository: OrderRepository;
    private readonly productService: ProductService;
    private readonly ordersProductsService: OrderProductsService;

    constructor(public prismaClient: PrismaClient) {
      this.orderRepository = new OrderRepository(prismaClient);
      this.productService = new ProductService(prismaClient);
      this.ordersProductsService = new OrderProductsService(prismaClient);
    }

    async storeOrder(payload: OrderSavePayloadDTO){
        const orderPayload = {
           platform_id: payload.platform_id
        }

        const order = await this.orderRepository.save(orderPayload);
        if(!order) throw Error("Error while trying to store order.");

        if(payload.line_items.length > 0){
            for (const item of payload.line_items) {
                const productId = item.product_id ? item.product_id : "0"
                const product = await this.productService.findProduct(productId);
          
                if (product) {
                  // If product exists in database, create a new record for this order's product.
                  const orderProductPayload = {
                    order_id: String(order.id),
                    product_id: String(product.id),
                  };
                  
                  const orderProduct = await this.ordersProductsService.storeOrder(orderProductPayload);
                  if(!orderProduct) throw Error("Error while trying to store order's product.")
                }
            }
        }
    }

}