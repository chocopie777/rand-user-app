import type { User } from '@/types/User'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFilterStore } from './filterStore'

export const useRandomUserStore = defineStore('randomUser', () => {
  const user = ref<User | null>(null)
  const filterStore = useFilterStore()

  async function getRandomUser() {
    try {
      const result = await axios.get(`https://randomuser.me/api/?${filterStore.genderFilterValue !== 'Any' ? `gender=${filterStore.genderFilterValue}&` : ''}${filterStore.nationalityFilterValue !== 'Any' ?  `nat=${filterStore.nationalityFilterValue}` : ''}`)
      user.value = {
        email: result.data.results[0].email,
        gender: result.data.results[0].gender,
        location: {
          city: result.data.results[0].location.city,
          country: result.data.results[0].location.country,
          street: {
            name: result.data.results[0].location.street.name,
            number: result.data.results[0].location.street.number
          }
        },
        name: {
          first: result.data.results[0].name.first,
          last: result.data.results[0].name.last
        },
        nationality: result.data.results[0].nat,
        phone: result.data.results[0].phone,
        picture: {
          large: result.data.results[0].picture.large,
          medium: result.data.results[0].picture.medium,
          thumbnail: result.data.results[0].picture.thumbnail,
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { user, getRandomUser }
})
