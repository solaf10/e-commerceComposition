export interface ProductCardType {
  id: number
  title: string
  thumbnail: string
  price: number
  category?: string
  brand?: string
}
export interface CartItem extends ProductCardType {
  amount: string
}
