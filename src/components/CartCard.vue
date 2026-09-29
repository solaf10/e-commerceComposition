<template>
  <div class="cart-card">
    <div class="image">
      <img :src="thumbnail" :alt="title" />
    </div>
    <div class="info">
      <div class="title">
        <h2>{{ title }}</h2>
        <p>{{ brand }}</p>
      </div>

      <div class="controller">
        <div class="amount">
          <label for="count">Amount</label>
          <select name="amount" v-model="selectedAmount">
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
        <button @click="cartStore.removeCartItem(id)">remove</button>
      </div>
      <p class="price">${{ totalItemPrice }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { CartItem } from '@/interfaces'
import useCartStore from '@/stores/cart'
import { computed, ref } from 'vue'

const { id, title, thumbnail, price, amount, brand } = defineProps<CartItem>()
const selectedAmount = ref(amount)
const totalItemPrice = computed(() => (+price * +selectedAmount.value).toFixed(2))

const cartStore = useCartStore()
</script>
<style>
.cart-card:not(:last-child) {
  padding-bottom: 24px;
  margin-bottom: 48px;
}
.cart-card {
  display: flex;
  gap: 40px;

  img {
    border-radius: 8px;
    width: 128px;
    height: 128px;
  }
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--font-color-bright);

    .title {
      width: 192px;
      h2 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }
      p {
        font-size: 14px;
        color: #c7c9d1;
      }
    }

    .controller {
      text-align: center;
      .amount {
        display: flex;
        flex-direction: column;

        label {
          color: inherit;
          font-size: 14px;
        }

        select {
          height: 1.5rem;
          margin: 8px 0px;
          padding-left: 0.5rem;
          font-size: 0.75rem;
          min-height: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e2e8f4;
        }
        select:focus {
          outline-style: solid;
          outline-width: 2px;
          outline-offset: 2px;
          outline-color: #394e6a33;
        }
      }
      button {
        padding: 0px;
        border: 0px;
        background-color: transparent;
        color: var(--main-color-bright);
        font-size: 14px;
        transition: 0.5s;
      }
      button:hover {
        text-decoration: underline;
      }
    }
    .price {
      text-align: center;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
.cart-card:not(:last-child) {
  border-bottom: 1px solid #e2e8f4;
}
.dark {
  .cart-page {
    .cart-card {
      border-color: #09090c;
      .info {
        color: white;
        .controller {
          .amount {
            select {
              color: white;
              border-color: #f8f8f233;
              background-color: var(--main-bg-dark);
            }
          }
        }
      }
    }
  }
}
</style>
