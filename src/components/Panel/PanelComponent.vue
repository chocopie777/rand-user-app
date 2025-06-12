<template>
  <div id="targetSection" class="pt-5 mb-5 max-w-[500px] mx-auto flex justify-between">
    <GenderFilter />
    <NationalityFilter />
  </div>
</template>

<script setup lang="ts">
import GenderFilter from './GenderFilter.vue';
import NationalityFilter from './NationalityFilter.vue';


</script>

<style scoped></style>
