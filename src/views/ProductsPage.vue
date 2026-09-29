<template>
  <ProductsFilter :products="products" @filterProducts="($event) => onFilterProducts($event)" />
  <ProductsSection :products="filteredProducts" :isLinear="isLinear" :isLoading="isLoading"
    ><template #secTitle>
      <div class="info" style="margin-bottom: 3rem">
        <p>{{ filteredProducts.length }} Products</p>
        <div class="layout-controllers">
          <button @click="isLinear = true" :class="isLinear ? 'selected' : ''">
            <TextAlignJustify />
          </button>
          <button @click="isLinear = false" :class="!isLinear ? 'selected' : ''">
            <LayoutGrid />
          </button>
        </div>
      </div> </template
  ></ProductsSection>
</template>
<script lang="ts" setup>
import ProductsFilter from '@/components/ProductsFilter.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import type { ProductCardType } from '@/interfaces'
import ProductsLogic from '@/mixins/Products'
import { LayoutGrid, TextAlignJustify } from '@lucide/vue'
import { ref } from 'vue'
const { products, filteredProducts, isLoading } = ProductsLogic()
const isLinear = ref(false)

const onFilterProducts = (filterRes: ProductCardType[]) => {
  filteredProducts.value = filterRes
}
</script>
