import { PrismaClient } from '@prisma/client'
import { ProductRepository } from '../repository/products-repository'
import { ShopifyService } from '../../../services/shopify/shopify-service'
import { ProductSavePayload, ShopifyData } from '../interface/products-interface'

export default class ProductService {

    private readonly productRepository: ProductRepository 
    private readonly shopifyService: ShopifyService
  
    constructor(public prismaClient: PrismaClient) {
      this.productRepository = new ProductRepository(prismaClient)
      this.shopifyService = new ShopifyService();
    }

    async getAll(){
        const products = await this.productRepository.all();
        return { products }
    }

    async storeProducts(){
      const shopifyProducts = await this.shopifyService.allProducts();
      if(!shopifyProducts) throw Error("Error while trying to fetch all the products.");

      const productsData = shopifyProducts.data as ShopifyData;
      const products = productsData.products;
      const productsPayload = products.map((data) => {
        return {
          platform_id: String(data.id),
          name: data.title,
        };
      });
      
      const batchStoreProducts = await this.productRepository.batchStore(
        productsPayload
      );
      if(!batchStoreProducts) throw Error("Error while trying to store the products.");

      return batchStoreProducts;
    }
}