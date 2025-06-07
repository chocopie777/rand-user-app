import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterStore = defineStore('filter', () => {
  const genderFilterValue = ref('Any')
  const nationalityFilterValue = ref("Any")

  return { genderFilterValue, nationalityFilterValue}
})
