<template>
  <HeaderComponent />
  <main class="grow-1 bg-indigo-200">
    <div class="max-w-[1200px] mx-auto px-[15px]">
      <HomeComponent />
    </div>
  </main>
  <FooterComponent />
</template>

<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

</script>

<style scoped>

</style>
