<template>
  <div class="loading">
    <div class="loader"></div>
  </div>
</template>
<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--header-height));
}
.loader {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--main-bg-bright);
  box-shadow: 0 0 0 0 #02143145;
  animation: l1 1s infinite;
}
.dark {
  .loading {
    .loader {
      background-color: white;
      box-shadow: 0 0 0 0 #ffffff45;
    }
  }
}
@keyframes l1 {
  100% {
    box-shadow: 0 0 0 30px #0000;
  }
}
</style>
