<template>
  <div class="card" @click="$router.push({ name: 'product', params: { id }, query: { title } })">
    <div class="image">
      <img :src="thumbnail" :alt="title" />
    </div>
    <div class="content">
      <h4>{{ title }}</h4>
      <p class="price">${{ price }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ProductCardType } from '@/interfaces'

const { id, title, thumbnail, price } = defineProps<ProductCardType>()
</script>
<style scoped>
.card {
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .image {
    padding: 1rem 1rem 0px;
    height: 12rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      object-fit: fill;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem 2rem 0px;
    text-align: center;
    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: inherit;
    }
    .price {
      color: #463aa1;
      text-align: center;
      margin-bottom: 16px;
    }
  }
}
.card:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.linear-layout .card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem 0px;
    img {
      width: 128px;
      height: 128px;
      transition: 0.5s;
    }
  }
  p.price {
    text-align: right;
  }
}
.linear-layout .card:hover .image img {
  transform: scale(1.1);
}
.grid-layout .card {
  display: block;
  .image {
    display: block;
    padding: 1rem 1rem 0px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.products.dark .card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}
.products.dark .card:hover {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8);
}
</style>
