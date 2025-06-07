<template>
  <div class="relative">
    <button class="p-2 border-2 border-purple-500 rounded-xl flex font-black text-purple-700 cursor-pointer" @click="isOpen = !isOpen">
      <svg class="w-5 fill-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19 4c.852 0 1.297 .986 .783 1.623l-.076 .084l-3.792 3.793l3.792 3.793c.603 .602 .22 1.614 -.593 1.701l-.114 .006h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z" />
      </svg>
      <span class="ml-2">{{ filterStore.nationalityFilterValue }}</span>
    </button>
    <div v-if="isOpen" class="border-2 bg-purple-300 border-purple-500 absolute left-0 right-0 rounded-xl top-12 p-2 text-center text-lg max-h-30 overflow-auto">
      <template v-for="nat in nationalities" :key="nat">
        <div class="cursor-pointer text-purple-700 font-bold" @click="filterHandler(nat)">{{nat}}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filterStore';
import { ref } from 'vue';

const filterStore = useFilterStore()
const isOpen = ref(false)
const nationalities = ['Any', 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US']

function filterHandler(data: string) {
  filterStore.nationalityFilterValue = data
  isOpen.value = !isOpen.value
}
</script>

<style scoped></style>
