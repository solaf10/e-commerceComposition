import config from '@/constants/enviroment'
import type { ProductCardType } from '@/interfaces'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'

const ProductsLogic = () => {
  const products = ref<ProductCardType[]>([])
  const isLoading = ref<boolean>(false)
  const filteredProducts = ref<ProductCardType[]>([])

  watch(
    products,
    (newProducts) => {
      filteredProducts.value = newProducts
    },
    { immediate: true },
  )

  onMounted(() => {
    isLoading.value = true
    axios
      .get(config.baseUrl + config.products)
      .then((res) => (products.value = res.data.products))
      .catch((err) => console.log(err))
      .finally(() => (isLoading.value = false))
  })
  return { products, filteredProducts, isLoading }
}
export default ProductsLogic
