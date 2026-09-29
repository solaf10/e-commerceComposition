<template>
  <div v-for="value in count" :key="value">
    <div className="skeleton-con">
      <div className="skeleton-img"></div>
      <p className="p-skeleton"></p>
      <p className="p-skeleton"></p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { count } = defineProps<{ count: number }>()
</script>
<style>
.skeleton-con {
  background-color: #f8fbff;
  padding: 45px 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.skeleton-img {
  width: 90%;
  height: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: var(--main-bg-bright);
  background-color: var(--secondary-bg-bright);
  animation: skeleton 1s ease-in-out infinite alternate;
}
.p-skeleton {
  width: 70%;
  height: 18px;
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: var(--secondary-bg-bright);
  animation: skeleton 1s ease-in-out infinite;
}
.dark {
  .skeleton-con {
    background-color: #414558;
  }
  .skeleton-con .skeleton-img,
  .skeleton-con .p-skeleton {
    background-color: var(--main-bg-dark);
  }
}
@keyframes skeleton {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
