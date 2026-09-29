<template>
  <section class="hero">
    <div class="container">
      <div class="content">
        <h1>We are changing the way people shop</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim
          soluta temporibus asperiores aut obcaecati perferendis porro nobis
        </p>
        <button class="btn" @click="router.push({ name: 'products' })">Our Products</button>
      </div>
      <div class="image">
        <img src="/public/images/products/hero.webp" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style>
.hero .container {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  gap: 40px;
  color: var(--font-color-bright);
  .image {
    width: 50%;
    padding: 16px;
    border-radius: 16px;
    background-color: var(--main-bg-bright);
    img {
      width: 100%;
      height: 416px;
      object-fit: cover;
    }
  }
  .content {
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    h1 {
      font-size: 60px;
      line-height: 1;
      font-weight: 700;
      margin-bottom: 16px;
    }
    p {
      line-height: 2;
      font-size: 18px;
    }
    .btn {
      width: fit-content;
      font-size: 14px;
      transition: 0.3s;
      margin-top: 16px;
    }
    .btn:active {
      transform: scale(0.9);
    }
  }
}
.dark {
  .hero .container {
    .image {
      background-color: #414558;
    }
    .content {
      color: white;
    }
  }
}
@media (max-width: 992px) {
  .hero .container {
    padding-top: 64px;
    flex-wrap: wrap;
    .content,
    .image {
      width: 100%;
    }
  }
}
@media (max-width: 500px) {
  .hero .container {
    .content {
      h1 {
        font-size: 48px;
      }
    }
  }
}
</style>
