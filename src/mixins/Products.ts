import config from '@/constants/enviroment'
import type { ProductCardType } from '@/interfaces'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const ProductsLogic = () => {
  const products = ref<ProductCardType[]>([])
  onMounted(() => {
    axios
      .get(config.baseUrl + config.products)
      .then((res) => (products.value = res.data.products))
      .catch((err) => console.log(err))
  })
  return { products }
}
export default ProductsLogic
