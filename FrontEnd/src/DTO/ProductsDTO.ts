export interface ProductDTO {
  _id: string
  userId: string
  name: string
  image: string
  brand: string
  category: string
  description: string
  rating: number
  numReviews: number
  price: number
  countInStock: number
  createdAt?: Date
  updatedAt?: Date
}
