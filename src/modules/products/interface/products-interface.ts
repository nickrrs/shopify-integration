import { Product } from '@prisma/client'

export interface ProductFetchAllResponseDTO {
  Products: Product[]
}

export interface ProductFetchOneResponseDTO {
  Product: Product
}

export interface ProductSavePayload {
    platform_id?: string
    name: string
}

export interface ShopifyData {
  products: any[]; 
}
