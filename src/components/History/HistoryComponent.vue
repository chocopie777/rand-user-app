<template>
  <div class="mb-10">
    <h3 class="text-2xl font-medium mt-5 text-center">
      History:
    </h3>
    <div class="border-b-1 mt-5"></div>
    <div v-if="isLoading" class="py-5 text-center font-medium text-gray-600">
      Loading...
    </div>
    <div v-else class="py-5 text-center font-medium text-gray-600">
      <SimpleBar v-if="usersHistory" class="w-full" data-simplebar-auto-hide="false">
        <div class="flex justify-around">
          <template v-for="user in usersHistory" :key="user.name">
            {{ console.log(user) }}
            <HistoryCard :user-data="user"/>
          </template>
        </div>
      </SimpleBar>
      <span v-else>
        The history of generated profiles is empty..
      </span>
    </div>
    <div class="border-b-1"></div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/User';
import type { PropType } from 'vue';
import HistoryCard from './HistoryCard.vue';
import SimpleBar from 'simplebar-vue';
import '../../../node_modules/simplebar-vue/dist/simplebar.min.css';

defineProps({
  isLoading: { type: Boolean, required: true },
  usersHistory: {type: Array  as PropType<User[] | null>  ,required: true }
})
</script>

<style scoped></style>
