<template>
  <div class="cart-page">
    <div class="container">
      <div class="empty" v-if="cart.length === 0">
        <h1>Your cart is empty</h1>
        <router-link to="/products" class="btn">Add a Product</router-link>
      </div>
      <template v-else>
        <h1>Shopping Cart</h1>
        <div class="content">
          <div class="cart-items">
            <CartCard
              v-for="item in cart"
              :key="item.id"
              :id="item.id"
              :thumbnail="item.thumbnail"
              :title="item.title"
              :price="item.price"
              :brand="item.brand"
              :amount="item.amount"
            />
          </div>
          <div class="checkout">
            <div class="card">
              <p>
                <span>Subtotal</span>
                <span class="price">${{ totalPrice?.toFixed(2) }}</span>
              </p>
              <p>
                <span>Shipping</span>
                <span class="price">${{ ship?.toFixed(2) }}</span>
              </p>
              <p>
                <span>Tax</span>
                <span class="price">${{ tax?.toFixed(2) }}</span>
              </p>
              <p class="total">
                <span>Order Total</span>
                <span class="price">${{ total?.toFixed(2) }}</span>
              </p>
            </div>
            <button class="btn">Proceed to checkout</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CartCard from '@/components/CartCard.vue'
import useCartStore from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const cartStore = useCartStore()
const { cart, totalPrice } = storeToRefs(cartStore)
const tax = computed(() => +totalPrice.value * 0.1)
const ship = 5
const total = computed(() => totalPrice.value + ship + tax.value)
</script>
<style>
.cart-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: calc(100vh - var(--header-height));
  color: var(--font-color-bright);
  .container {
    h1 {
      font-size: 1.875rem;
      text-transform: capitalize;
      font-weight: 500;
      padding-bottom: 20px;
      margin-bottom: 32px;
      border-bottom: 1px solid #e2e8f4;
      color: inherit;
    }
    .empty {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0px;
      }
      .btn {
        width: fit-content;
        text-decoration: none;
      }
    }
    .content {
      display: flex;
      gap: 48px;
      .cart-items {
        width: 66%;
        max-height: 337px;
        overflow-y: auto;
      }
      .checkout {
        flex: 1;
        .card {
          border: none;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 12px;
          background-color: var(--secondary-bg-bright);
          p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 8px;
            border-bottom: 1px solid #e2e8f4;
            color: var(--font-color-bright);
            span {
            }
            span.price {
              font-weight: 500;
            }
          }
          p.total {
            font-size: 14px;
            margin-bottom: 0px;
            padding-bottom: 8px;
            border: none;
          }
        }
        .btn {
          margin-top: 32px;
        }
      }
    }
  }
}
.dark {
  .cart-page {
    color: white;
    .container {
      h1 {
        border-color: #09090c;
      }
      p {
        color: white;
        border-color: var(--secondary-bg-dark);
      }
      .content {
        .checkout {
          .card {
            background-color: var(--secondary-bg-dark);
            p {
              color: white;
              border-color: #09090c;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .cart-page {
    .container {
      .content {
        display: flex;
        flex-direction: column;
        gap: 48px;
        .cart-items {
          width: 100%;
        }
      }
    }
  }
}
</style>
