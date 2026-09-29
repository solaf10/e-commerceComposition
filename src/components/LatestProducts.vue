<template>
  <ProductsSection class="latest-products" :products="products.slice(0, 3)">
    <template #secTitle> <h2 class="main-title">Latest Products</h2></template>
  </ProductsSection>
</template>
<script setup lang="ts">
import config from '@/constants/enviroment'
import type { ProductCardType } from '@/interfaces'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import ProductsSection from './ProductsSection.vue'
const products = ref<ProductCardType[]>([])
onMounted(() => {
  axios
    .get(config.baseUrl + config.products)
    .then((res) => (products.value = res.data.products))
    .catch((err) => console.log(err))
})
</script>
<style>
.latest-products .container {
  .main-title {
    margin-bottom: 3rem;
  }
  h2.main-title {
    padding-bottom: 1.25rem;
    text-align: left;
    font-size: 30px;
    border-bottom: 1px solid #e2e8f4;
  }
}
@media (max-width: 400px) {
  .latest-products .container {
    .content {
      grid-template-columns: unset;
    }
  }
}
</style>
