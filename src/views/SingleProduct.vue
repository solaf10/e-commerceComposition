<template>
  <div class="single-product">
    <div class="container">
      <div class="product-title">
        <router-link to="/">Home</router-link>
        <span>&gt;</span>
        <router-link to="/products">Products</router-link>
        <span>&gt;</span>
        <router-link :to="`/products/${$route.params.id}`"> {{ product?.title }} </router-link>
      </div>
      <div class="content row">
        <div class="image">
          <img :src="product?.thumbnail" alt="err" />
        </div>
        <div class="text">
          <h2>{{ product?.title }}</h2>
          <div class="category">{{ product?.brand }}</div>
          <div class="price">${{ product?.price }}</div>
          <p class="desc">{{ product?.description }}</p>
          <div class="rating">
            <h3>rating</h3>
            <p>
              <Star
                v-for="n in 5"
                :key="n"
                :fill="n <= roundedRating ? '#ffc107' : 'none'"
                :stroke="'#ffc107'"
              />
            </p>
          </div>
          <div class="amount">
            <label for="count">Amount</label>
            <select class="form-select" name="amount" id="count" v-model="amount">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <div class="btn">Add to bag</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import config from '@/constants/enviroment'
import { Star } from '@lucide/vue'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

interface ProductDetails {
  id: string
  title: string
  description: string
  brand: string
  thumbnail: string
  rating: number
  price: number
}

const product = ref<null | ProductDetails>(null)
const roundedRating = computed(() => Math.round(product.value?.rating ?? 0))
const amount = ref(1)
onMounted(() => {
  const route = useRoute()
  axios
    .get(`${config.baseUrl}${config.products}/${route.params.id}`)
    .then((res) => (product.value = res.data))
    .catch((err) => console.log(err))
})
</script>
<style>
.single-product {
  padding: 80px 0px;
  text-align: left;

  .product-title {
    color: var(--font-color-bright);
    a {
      text-decoration: none;
      color: inherit;
      transition: 0.3s;
    }
    a:not(.router-link-exact-active):hover {
      text-decoration: underline;
    }
    span {
      color: #707177;
      margin: 0px 0.75rem;
    }
    a.router-link-exact-active {
      font-weight: bold;
    }
  }
  .content {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: var(--font-color-bright);
    .image {
      width: 49%;
      padding-right: 2rem;
      margin-bottom: 2rem;
      img {
        width: 100%;
        height: 384px;
        border-radius: 0.5rem;
      }
    }
    .text {
      width: 49%;
      padding-right: 2rem;
      h2 {
        font-weight: 700;
        text-transform: capitalize;
        font-size: 30px;
      }
      .category {
        margin-top: 0.5rem;
        font-weight: 700;
        font-size: 1.25rem;
        text-transform: capitalize;
        color: #c7c9d1;
      }
      .price {
        margin-top: 0.75rem;
        font-size: 1.25rem;
      }
      .desc {
        margin: 1.5rem 0px;
        line-height: 2rem;
      }
      .rating svg {
        stroke: #ffc107;
        width: 16px;
      }
      .amount {
        width: 68%;
        display: flex;
        flex-direction: column;
      }
      label {
        padding: 0.5rem 0.25rem;
      }
      select {
        height: 3rem;
        padding-left: 1rem;
        padding-right: 2.5rem;
        font-size: 0.875rem;
        border-color: #bf95f9;
        border-radius: 8px;
        box-shadow: 0 0 0 0.25rem rgb(191 149 249 / 25%);
        option {
          transition: 0.3s;
        }
        option:hover {
          background-color: #bf95f9;
        }
      }
      .btn {
        width: fit-content;
        margin-top: 2.5rem;
        font-size: 0.875rem;
        color: #dbd4ed;
        background-color: #463aa1;
        cursor: pointer;
      }
      .btn:hover {
        background-color: #3b3187;
      }
    }
  }
}
.dark {
  .single-product {
    .product-title {
      color: white;
    }
    .content {
      color: white;
    }
  }
}

@media (max-width: 991px) {
  .single-product {
    .content {
      .image,
      .text {
        width: 100%;
        padding-right: 0px;
      }
    }
  }
}
</style>
