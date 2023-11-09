import { Order } from "@prisma/client";

export interface OrderFetchAllResponseDTO {
    Orders: Order[]
}
  
export interface OrderFetchOneResponseDTO {
    Order: Order
}

export interface OrderSavePayload {
  platform_id: string;
}

export interface OrderSavePayloadDTO {
  platform_id: string;
  line_items: {
    product_id?: string;
  }[]; 
}