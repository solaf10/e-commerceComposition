<template>
  <ProductsSection class="latest-products" :products="products.slice(0, 3)">
    <template #secTitle> <h2 class="main-title">Latest Products</h2></template>
  </ProductsSection>
</template>
<script setup lang="ts">
import ProductsSection from './ProductsSection.vue'
import ProductsLogic from '@/mixins/Products.ts'
const { products } = ProductsLogic()
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
