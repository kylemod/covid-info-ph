<template>
  <div class="md:flex-1 p-4 rounded-xl shadow bg-white dark:bg-gray-800">
    <h1 class="text-md font-semibold">Cases by Country</h1>
      <div class="mt-2 mb-2 h-auto overflow-y-auto">
        <div class="mb-4">
          <input type="text" class="p-2 px-4 w-full border rounded-lg focus:outline-none focus:border-gray-500 md:w-1/2 dark:bg-gray-900 dark:border-gray-800" placeholder="Search Country..." v-model="search">
        </div>
        <div v-if="error">
          <CardError />
        </div>
        <div v-if="fetch">
          <div class="bg-gray-100 p-4 rounded-md animate-pulse dark:bg-gray-900">
            <span class="h-3 w-24 bg-gray-300 rounded block dark:bg-gray-800"></span>
            <span class="h-3 w-36 bg-gray-300 rounded block mt-2 dark:bg-gray-800"></span>
            <span class="h-3 w-28 bg-gray-300 rounded block mt-2 dark:bg-gray-800"></span>
            <span class="h-3 w-40 bg-gray-300 rounded block mt-2 dark:bg-gray-800"></span>
          </div>
        </div>
        <div v-else>
          <span v-if="!country.length" class="dark:text-gray-300">Country <b>not found</b> or Country <b>doesn't</b> have any cases.</span>
            <div class="md:flex md:flex-wrap">
              <div v-for="data in country" :key="data.id" class="md:w-1/2 md:px-2 lg:w-1/4">
               
                <div class="mt-1 bg-gray-100 py-2 px-3 dark:border-gray-700 rounded-md dark:bg-gray-900">
                  <h1 class="font-medium dark:text-gray-300">{{ data.country }}</h1>
                  <p class="text-sm">Cases : <span class="font-medium text-indigo-500">{{ data.cases | numeral(0,0) }}</span></p>
                  <p class="text-sm">Deaths : <span class="font-medium text-red-500">{{ data.deaths | numeral(0,0) }}</span></p>
                  <p class="text-sm">Recovered : <span class="font-medium text-green-400">{{ data.recovered | numeral(0,0) }}</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, computed } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  setup(props,{root}) {
    let search = ref('')
    let countries = ref([])
    let fetch = ref(true)
    let error = ref()
    
    const country = computed(() => {
      return countries.value.filter(data => {
        return data.country.toLowerCase().includes(search.value.toLowerCase())
      })
    })
  
    const fetchData = async () => {
      fetch.value = await true 
      await root.$axios.$get('https://coronavirus-19-api.herokuapp.com/countries')
        .then(async res => {
          await root.$store.commit('setCountriesData', res)
          countries.value = await root.$store.getters.getCountriesData
          fetch.value = await false
        })
        .catch(err => {
          //console.log(err)
          fetch.value = false
          error.value = true
        })
    }
    
    onMounted(() => {
      fetchData()
    })
  
  return { countries, search, fetchData, fetch, error, country }
  }
})
</script>