<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import PageHeader from './components/PageHeader.vue'
import PageNav from './components/PageNav.vue'
const isDark = ref(JSON.parse(localStorage.getItem('isDark') || 'false'))
watch(
  () => isDark.value,
  (newVal) => {
    localStorage.setItem('isDark', JSON.stringify(newVal))
  },
)
provide('isDark', isDark)
</script>

<template>
  <div :class="`app ${isDark ? 'dark' : 'light'}`">
    <PageHeader />
    <PageNav />
    <router-view> </router-view>
  </div>
</template>

<style>
.dark {
  color: white;
  background-color: var(--main-bg-dark);
}
</style>
