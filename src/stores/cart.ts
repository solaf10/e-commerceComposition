import type { CartItem } from '@/interfaces'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const useCartStore = defineStore('cart', () => {
  const toast = useToast()
  const router = useRouter()

  const cart = ref<CartItem[]>(JSON.parse(localStorage.getItem('cart') || '[]'))

  const totalCartProducts = computed(() =>
    cart.value.reduce((acc, cur) => acc + Number(cur.amount), 0),
  )
  const totalPrice = computed(() =>
    cart.value.reduce((acc, cur) => {
      return acc + Number(cur.price)
    }, 0),
  )

  const addToCart = (product: CartItem) => {
    const exists = cart.value.find((item) => item.id === product.id)

    if (exists) {
      toast.error("The Product's Already There!, Increase the amount in cart")
    } else {
      cart.value.push(product)
      toast.success('Product Added Successfully!')
    }
    router.push({ name: 'cart' })
  }

  const removeCartItem = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id)
    toast.success("Product's been Removed Successfully!")
  }

  watch(
    () => cart.value,
    () => {
      localStorage.setItem('cart', JSON.stringify(cart.value))
    },
    { deep: true },
  )

  return { cart, totalCartProducts, totalPrice, addToCart, removeCartItem }
})
export default useCartStore
