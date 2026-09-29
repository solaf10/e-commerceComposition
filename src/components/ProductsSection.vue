<template>
  <section class="products">
    <div class="container">
      <slot name="secTitle"></slot>
      <div
        :class="`content ${isLinear ? 'linear-layout' : 'grid-layout'}`"
        :style="`grid-template-columns: ${isLinear ? 'repeat(1fr)' : 'repeat(auto-fill, minmax(300px, 1fr))'};`"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :thumbnail="product.thumbnail"
          :price="product.price"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { ProductCardType } from '@/interfaces.ts'
import ProductCard from './ProductCard.vue'

const { isLinear, products } = defineProps<{
  isLinear?: boolean
  products: ProductCardType[]
}>()
</script>
<style>
.products {
  padding-bottom: 3rem;
}
.products .info {
  margin-top: 3rem;
}
/* layout control */
.products .info {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #e2e8f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px;
  }
  .layout-controllers {
    display: flex;
    align-items: center;
    gap: 8px;
    button {
      height: 2.5rem;
      width: 2.5rem;
      font-size: 1.25rem;
      border: none;
      color: #394e6a;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;
      line-height: 15px;
    }
    button:not(.selected):hover {
      background-color: #394e6a33;
    }
    .selected {
      color: #dbe1ff;
      background-color: var(--main-color-bright);
    }
  }
}
/* products */
.products .content {
  display: grid;
  gap: 16px;
}
.dark {
  .products select::placeholder,
  .products input::placeholder {
    color: white;
  }
  .products .filter-area > div:not(.control) input,
  .products .filter-area > div:not(.control) select {
    color: white;
    border-color: #394e6a33;
    background-color: #272935;
  }
  .products .filter-area .price label,
  .products .filter-area .price .limits {
    color: white;
  }
  .products .infos .layout-controllers button.selected {
    background-color: var(--main-color-dark);
  }
}
</style>
