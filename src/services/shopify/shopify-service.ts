import { Shopify } from '@shopify/shopify-api';
import { shopifyConfig } from '../../helpers/shopify-config';

export class ShopifyService {

    private readonly shopify;
    constructor() {
        this.shopify = new Shopify.Clients.Rest(shopifyConfig.host, shopifyConfig.token);
    }

    async allProducts() {
        const products = await this.shopify.get({
            path: 'products',
        });
        
        return {
            data: products.body,
            nextPageLink: products.headers.get('link')
        }
    }

    async allOrders(){
        const orders = await this.shopify.get({
            path: 'orders',
        });

        return {
            data: orders.body,
            nextPageLink: orders.headers.get('link')
        }
    }
}
  