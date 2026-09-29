export interface ProductCardType {
  id: number
  title: string
  thumbnail: string
  price: number
}
export interface CartItem extends ProductCardType {
  amount: string
  brand: string
}
