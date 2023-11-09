import { Product } from '@prisma/client'

// Fetch
export interface ProductFetchPayload {

}

export interface ProductFetchAllResponseDTO {
  Products: Product[]
}

export interface ProductFetchOneResponseDTO {
  Product: Product
}

// Save
export interface ProductSavePayload {
    platform_id?: string
    name: string
}

export interface ShopifyData {
  products: any[]; 
}
