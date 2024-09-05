import { IProductDTO } from "./ProductDTO"

export interface ICartDTO {
  cartItems: IProductDTO[]
  itemsPrice: number
  shippingAddress: string
  paymentMethod: string
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}
