import { PrismaClient, Product } from "@prisma/client";
import { ProductSavePayload } from "../interface/products-interface";

export class ProductRepository{
    constructor(private readonly client: PrismaClient) {}


    public all(): Promise<Array<Product>> {
        return this.client.product.findMany({})
    }

    public findFirst(product_id: string){
      return this.client.product.findFirst({
        where: {
           platform_id: product_id
        },
      });
    }

    public async batchStore(
        payload: Array<ProductSavePayload>
      ): Promise<{ count: number }> {
        const products = await this.client.product.createMany({
          data: payload,
        });
    
        return products;
    }

}
