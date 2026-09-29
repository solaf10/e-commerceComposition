<template>
  <nav>
    <div class="container">
      <div class="logo">C</div>
      <ul class="links">
        <li v-for="link in router.options.routes" :key="link.name">
          <router-link class="link" :to="link.path">{{ link.meta?.title }}</router-link>
        </li>
      </ul>
      <div class="setting">
        <div class="dark-mode">
          <div
            class="icon"
            :style="`transform:${isDark ? 'rotate(-45deg)' : 'rotate(0deg)'}`"
            @click="isDark = !isDark"
          >
            <Sun v-show="isDark" />
            <Moon v-show="!isDark" />
          </div>
        </div>
        <router-link to="/cart" class="cart">
          <div class="count">{{ totalCartProducts }}</div>
          <ShoppingCart class="cart-icon" />
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import useCartStore from '@/stores/cart'
import { Moon, ShoppingCart, Sun } from '@lucide/vue'
import { storeToRefs } from 'pinia'
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = inject('isDark')
const cartStore = useCartStore()
const { totalCartProducts } = storeToRefs(cartStore)
</script>
<style>
nav {
  height: 64px;
  display: flex;
  align-items: center;
  background-color: var(--secondary-bg-bright);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .links {
      display: flex;
      align-items: center;
      gap: 10px;
      .link {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: inherit;
        transition: 0.3s;
        cursor: pointer;
        text-decoration: none;
      }
      .router-link-exact-active {
        color: white;
        background-color: var(--main-bg-bright);
      }
      .link:not(.router-link-exact-active):hover {
        background-color: #dee5f0;
      }
    }
  }
  .logo {
    width: fit-content;
    padding: 0px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
    border-radius: 8px;
    color: white;
    background-color: var(--main-color-bright);
  }
}
nav .setting {
  display: flex;
  align-items: center;
  gap: 30px;
}
nav .setting .dark-mode {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
nav .setting .dark-mode .icon {
  position: absolute;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 4px;
}
nav .setting .cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  color: black;
}
nav .setting .cart:hover,
nav .setting .cart.router-link-exact-active {
  background-color: #cbd5e1;
}
nav .setting .cart .count {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 13px;
  background-color: var(--main-color-bright);
}
nav .setting.dark .cart .count {
  background-color: var(--main-color-dark);
}
nav .setting .cart .cart-icon {
  font-size: 26px;
}

.dark {
  nav {
    background-color: var(--secondary-bg-dark);
    .container {
      .logo {
        color: #301c27;
        background-color: var(--main-color-dark);
      }
      .links {
        .link:not(.link.router-link-exact-active):hover {
          background-color: #f8f8f21a;
        }
        .link.router-link-exact-active {
          background-color: #414558;
        }
      }
      .setting {
        .cart:hover {
          background-color: #f8f8f21a;
        }
        .count {
          background-color: var(--main-color-dark);
        }
      }
    }
  }
}

@media (max-width: 991px) {
  nav .container {
    width: 100%;
  }
}
@media (max-width: 500px) {
  nav .container .links .link {
    font-size: 14px;
  }
}
</style>
