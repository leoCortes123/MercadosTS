import { ProductDTO } from "./ProductsDTO"

export interface CartDTO {
  CartList: { Product: ProductDTO; qty: number }[]
  shippingAddress: string[]
  paymentMethod: string
}
