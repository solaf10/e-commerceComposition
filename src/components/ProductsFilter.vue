<template>
  <div class="container">
    <form class="filter-area">
      <div class="search">
        <label for="search">Search</label>
        <input type="search" id="search" v-model.lazy="filterFormData.searchedKey" />
      </div>
      <div class="category">
        <label for="category">Select Category</label>
        <select name="category" id="category" v-model="filterFormData.category">
          <option value="all">all</option>
          <option v-for="category in categories" :value="category.name" :key="category.slug">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="brand">
        <label for="brand">Brand</label>
        <select name="brand" id="brand" v-model="filterFormData.brand">
          <option value="all">all</option>
          <option v-for="brand in brands" :value="brand" :key="brand">{{ brand }}</option>
        </select>
      </div>
      <div class="price">
        <label for="price">
          <span>Select Price:</span>
          <span>{{ filterFormData.price ? `$${filterFormData.price}` : '$1000' }}</span>
        </label>
        <input
          type="range"
          step="100"
          min="0"
          max="1000"
          id="price"
          v-model="filterFormData.price"
        />
        <p class="limits">
          <span>0</span>
          <span>max : $1000</span>
        </p>
      </div>
      <div class="control">
        <button @click="reset" type="button" class="reset">Reset</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import config from '@/constants/enviroment'
import type { ProductCardType } from '@/interfaces'
import axios from 'axios'
import { computed, onMounted, ref, watch } from 'vue'

const brands = [
  'Essence',
  'Glamour Beauty',
  'Velvet Touch',
  'Chic Cosmetics',
  'Nail Couture',
  'Calvin Klein',
  'Chanel',
  'Dior',
  'Dolce & Gabbana',
  'Gucci',
  'Annibale Colombo',
  'Furniture Co.',
  'Knoll',
  'Bath Trends',
]

const categories = ref<{ slug: string; name: string }[]>([])

onMounted(() => {
  axios
    .get(config.baseUrl + config.categories)
    .then((res) => (categories.value = res.data))
    .catch((err) => console.log(err))
})

const filterFormData = ref({ searchedKey: '', brand: 'all', category: 'all', price: 1000 })

const reset = () => {
  filterFormData.value = { searchedKey: '', brand: 'all', category: 'all', price: 1000 }
}

const { products } = defineProps<{ products: ProductCardType[] }>()

const filteredProducts = computed(() => {
  let tempProducts = products
  if (filterFormData.value.searchedKey) {
    tempProducts = tempProducts.filter((product) =>
      product.title.toLowerCase().includes(filterFormData.value.searchedKey.toLowerCase()),
    )
  }
  if (filterFormData.value.category !== 'all') {
    tempProducts = tempProducts.filter(
      (product) => product?.category?.toLowerCase() === filterFormData.value.category.toLowerCase(),
    )
  }
  if (filterFormData.value.brand !== 'all') {
    tempProducts = tempProducts.filter(
      (product) => product?.brand?.toLowerCase() === filterFormData.value.brand.toLowerCase(),
    )
  }
  if (+filterFormData.value.price < 1000) {
    tempProducts = tempProducts.filter((product) => +product.price <= +filterFormData.value.price)
  }
  return tempProducts
})

const emit = defineEmits<{ filterProducts: [filteredProducts: ProductCardType[]] }>()

watch(
  () => filterFormData.value,
  () => {
    emit('filterProducts', filteredProducts.value)
  },
  { deep: true },
)
</script>
<style scoped>
.filter-area {
  margin-top: 5rem;
  padding: 1.5rem 3rem;
  display: grid;
  gap: 2rem 1rem;
  border-radius: 0.375rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  background-color: rgba(140, 218, 247, 0.162);

  .price {
    input[type='range'] {
      padding: 0;
      height: 100%;
    }
  }
}

.filter-area > div:not(.control) {
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.875rem;
    color: inherit;
    padding: 0.5rem 0.25rem;
    text-align: left;
  }

  input,
  select {
    padding: 8px 16px;
    height: 100%;
    font-size: 1rem;
    border-width: 1px;
    border-color: #394e6a33;
    background-color: white;
    border-radius: 0.5rem;
  }

  input:focus {
    outline: none;
  }
}

.filter-area .control {
  display: flex;
  align-items: center;
  grid-column: 3;

  .reset {
    height: 2rem;
    line-height: 15px;
    color: white;
    background-color: #c149ad;
    padding: 0 0.75rem;
    font-size: 0.875rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
}

.filter-area .price label,
.filter-area .price .limits {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #394e6a;
  padding: 0.5rem 0.25rem;
  text-align: left;
}

.dark {
  .filter-area {
    background-color: var(--secondary-bg-dark);
    > div:not(.control) {
      input {
        color: white;
        border-color: white;
        background-color: var(--secondary-bg-dark);
      }
      select {
        color: white;
        border-color: white;
        background-color: var(--secondary-bg-dark);
      }
      .limits {
        color: white;
      }
    }
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .filter-area {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 1.5rem 2rem;
  }

  .filter-area .control {
    grid-column: span 2;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .filter-area {
    grid-template-columns: 1fr;
    padding: 1.25rem;
    gap: 1rem;
  }

  .filter-area .control {
    grid-column: auto;
  }
}
</style>
