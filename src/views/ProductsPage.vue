<template>
  <ProductsSection :products="products" :isLinear="isLinear"
    ><template #secTitle>
      <div class="info" style="margin-bottom: 3rem">
        <p>{{ products.length }} Products</p>
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
import ProductsSection from '@/components/ProductsSection.vue'
import ProductsLogic from '@/mixins/Products'
import { LayoutGrid, TextAlignJustify } from '@lucide/vue'
import { ref } from 'vue'
const { products } = ProductsLogic()
const isLinear = ref(false)
</script>
