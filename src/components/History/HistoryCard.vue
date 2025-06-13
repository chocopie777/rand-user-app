<template>
  <div class="relative pr-2">
    <div class="w-50 h-50 relative rounded-[50%] overflow-hidden mb-3 cursor-pointer group peer pointer-events-none"
      @click="avatarHandler">
      <img class="w-full h-full object-cover pointer-events-auto" :src="userData?.picture.large" alt="avatar">
      <div
        class="absolute top-0 bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
      </div>
      <div
        class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-1 opacity-0 group-hover:opacity-100 transition-opacity">
        Загрузить</div>
    </div>
    <span class="transition-opacity opacity-0 peer-hover:opacity-100">
      {{ userData?.name.first }}
      {{ userData?.name.last }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useRandomUserStore } from '@/stores/randomUserStore';
import type { User } from '@/types/User';
import type { PropType } from 'vue';

const randomUserStore = useRandomUserStore()
const props = defineProps({
  userData: { type: Object as PropType<User | null>, required: true }
})
console.log(props.userData)

function avatarHandler() {
  randomUserStore.user = props.userData
  const element = document.getElementById('targetSection');
  element?.scrollIntoView({
    behavior: 'smooth'
  });
}
</script>

<style scoped></style>
