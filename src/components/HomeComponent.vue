<template>
  <PanelComponent />
  <div class="flex flex-col items-center">
    <div
      class="w-50 h-50 relative rounded-[50%] overflow-hidden z-0 [filter:drop-shadow(0_4px_10px_rgba(168,85,247,0.5))]">
      <template v-if="isLoading">
        <div class="bg-gray-400 absolute left-0 top-0 right-0 bottom-0">
        </div>
        <svg class="absolute w-[50%] h-[50%] top-1/2 left-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="fill-gray-300" fill-rule="evenodd" clip-rule="evenodd"
            d="M7.76961 2.76961C7.31092 3.2283 7 3.95051 7 5C7 6.2921 7.43561 7.60063 8.08205 8.5703C8.7576 9.58362 9.49429 10 10 10C10.5057 10 11.2424 9.58361 11.918 8.5703C12.5644 7.60063 13 6.2921 13 5C13 3.95051 12.6891 3.2283 12.2304 2.76961C11.7717 2.31092 11.0495 2 10 2C8.95051 2 8.2283 2.31092 7.76961 2.76961ZM13.0952 10.3275C13.2709 10.1201 13.4336 9.9024 13.5821 9.6797C14.4356 8.39937 15 6.7079 15 5C15 3.54949 14.5609 2.2717 13.6446 1.35539C12.7283 0.439083 11.4505 0 10 0C8.54949 0 7.27171 0.439083 6.3554 1.35539C5.43909 2.2717 5 3.54949 5 5C5 6.7079 5.5644 8.39937 6.41795 9.6797C6.56642 9.9024 6.72912 10.1201 6.90483 10.3275C5.82101 10.5549 4.72146 10.9105 3.7281 11.4243C1.71526 12.4654 8.86406e-05 14.248 5.77058e-05 16.9999C5.77058e-05 16.9999 5.77058e-05 17 5.77058e-05 16.9999L-9.15442e-05 18.9998C-0.000215164 20.6567 1.34297 22 2.99991 22H17.0001C18.6569 22 20.0001 20.6569 20.0001 19V17C20.0001 14.248 18.2848 12.4654 16.2719 11.4243C15.2786 10.9105 14.179 10.5549 13.0952 10.3275ZM10 12C8.36255 12 6.28064 12.3557 4.64696 13.2007C3.03485 14.0346 2.00006 15.2519 2.00006 17L1.99991 18.9999C1.99987 19.5522 2.44759 20 2.99991 20H17.0001C17.5523 20 18.0001 19.5523 18.0001 19V17C18.0001 15.252 16.9653 14.0346 15.3531 13.2007C13.7194 12.3557 11.6375 12 10 12Z"
            fill="black" />
        </svg>
      </template>
      <img v-else class="w-full h-full object-cover" :src="randomUserStore.user?.picture.large" alt="">
    </div>
    <div
      class="flex justify-center max-w-[500px] w-full mx-auto bg-indigo-400 mt-5 rounded p-5 border-indigo-700 border-1">
      <div class="grow-1">
        <div class="text-lg text-white font-medium flex flex-col">
          <span>Name: </span>
          <span v-if="isLoading" class="text-black font-bold">Loading data...</span>
          <span v-else class="text-black font-bold">{{ randomUserStore.user?.name.first }} {{
            randomUserStore.user?.name.last }}</span>
        </div>
        <div class="border-b border-y-black-500 opacity-50 mt-1"></div>
        <div class="text-lg text-white font-medium mt-1 flex flex-col">
          <span>Gender: </span>
          <span v-if="isLoading" class="text-black font-bold">Loading data...</span>
          <span v-else class="text-black font-bold">{{ randomUserStore.user?.gender }}</span>
        </div>
        <div class="border-b border-y-black-500 opacity-50 mt-1"></div>
        <div class="text-lg text-white font-medium mt-1 flex flex-col">
          <span>Email: </span>
          <span v-if="isLoading" class="text-black font-bold">Loading data...</span>
          <span v-else class="text-black font-bold">{{ randomUserStore.user?.email }}</span>
        </div>
        <div class="border-b border-y-black-500 opacity-50 mt-1"></div>
        <div class="text-lg text-white font-medium mt-1 flex flex-col">
          <span>Phone: </span>
          <span v-if="isLoading" class="text-black font-bold">Loading data...</span>
          <span v-else class="text-black font-bold">{{ randomUserStore.user?.phone }}</span>
        </div>
        <div class="border-b border-y-black-500 opacity-50 mt-1"></div>
        <div class="text-lg text-white font-medium mt-1 flex flex-col">
          <span>Address: </span>
          <span v-if="isLoading" class="text-black font-bold">Loading data...</span>
          <span v-else class="text-black font-bold">{{ randomUserStore.user?.location.street.number }} {{
            randomUserStore.user?.location.street.name }}, {{ randomUserStore.user?.location.city }}, {{
              randomUserStore.user?.location.country }}</span>
        </div>
      </div>
    </div>
    <button @click="randomUserStore.getRandomUser"
      class="mb-10 hover:shadow-2xl flex fill-white justify-center items-center bg-indigo-600 text-white text-xl font-medium py-2 w-full max-w-[500px] rounded-lg cursor-pointer mt-5 hover:bg-indigo-900 transition ">
      <svg class="mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M2 12c0 .999.381 1.902.989 2.604l-1.098.732-.587.392c-.814-1.025-1.304-2.318-1.304-3.728 0-3.313 2.687-6 6-6h9v-3l6 4-6 4v-3h-9c-2.206 0-4 1.794-4 4zm20.696-3.728l-.587.392-1.098.732c.608.702.989 1.605.989 2.604 0 2.206-1.795 4-4 4h-9v-3l-6 4 6 4v-3h9c3.313 0 6-2.687 6-6 0-1.41-.489-2.703-1.304-3.728z" />
      </svg>
      Generate
    </button>
  </div>
  <HistoryComponent :is-loading="isLoading" :users-history="history"/>
</template>

<script setup lang="ts">
import { useRandomUserStore } from '@/stores/randomUserStore';
import HistoryComponent from './History/HistoryComponent.vue';
import PanelComponent from './Panel/PanelComponent.vue';
import { onMounted, ref, watch } from 'vue';
import type { User } from '@/types/User';
const randomUserStore = useRandomUserStore()
const isLoading = ref(false)
const history = ref<User[] | null>(null)

onMounted(async () => {
  isLoading.value = true
  await randomUserStore.getRandomUser()
  isLoading.value = false
})

watch(() => randomUserStore.user, (newUser) => {
  const currentHistory = JSON.parse(localStorage.getItem('history') || '[]')
  const updatedHistory = [newUser, ...currentHistory].slice(0, 4)
  localStorage.setItem('history', JSON.stringify(updatedHistory))
  history.value = updatedHistory.slice(1,4)
})
</script>

<style scoped></style>
