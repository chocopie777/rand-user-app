<template>
  <div>
    <div class="w-50 h-50 relative rounded-[50%] overflow-hidden mb-3">
      <img class="w-full h-full object-cover" :src="userData?.picture.large" alt="avatar">
    </div>
    <span>
      {{userData?.name.first }}
      {{userData?.name.last }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types/User';
import type { PropType } from 'vue';

const props = defineProps({
  userData: {type: Object as PropType<User | null>,required: true }
})
console.log(props.userData)
</script>

<style scoped></style>
