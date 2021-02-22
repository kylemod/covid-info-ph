<template>
  <div v-if="error" class="md:flex md:w-1/2 mt-6 md:px-2 md:mt-0">
    <CardError />
  </div>
  <div v-else-if="fetch.state" class="md:flex md:w-1/2 mt-6 md:px-2 md:mt-0">
    <CardLoading />
  </div>
  <div v-else class="md:flex md:w-1/2 mt-6 md:px-2 md:mt-0">
    <div class="md:flex-1 p-4 rounded-xl shadow bg-white dark:bg-gray-800">
      <h1 class="text-md font-semibold">Coronavirus Cases - <span class="text-gray-400 font-medium dark:text-gray-300">Philippines</span></h1>
      <div class="mt-4 mb-8">
        <p class="uppercase text-xs font-medium text-gray-400">Total Confirmed Cases</p>
        <client-only>
          <p class="font-bold text-gray-600 text-2xl mt-1 dark:text-gray-300">{{ ph.data.cases | numeral('0,0') }}</p>
        </client-only>
      </div>
      <div>
          <span class="inline-block w-3 h-3 mr-2 bg-indigo-500 rounded"></span>
          <p class="text-sm inline-block">Active Cases</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.active | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-indigo-500 rounded"></span>
          <p class="text-sm inline-block">Cases Today</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.todayCases | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-green-300 rounded"></span>
          <p class="text-sm inline-block">Recovered</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.recovered | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-green-300 rounded"></span>
          <p class="text-sm inline-block">Recovered Today</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.todayRecovered | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-yellow-500 rounded"></span>
          <p class="text-sm inline-block">Critical or Serious</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.critical | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-red-500 rounded"></span>
          <p class="text-sm inline-block">Deaths</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.deaths | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-red-500 rounded"></span>
          <p class="text-sm inline-block">Deaths Today</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.todayDeaths | numeral('0,0') }}</p>
      </div>
      <div class="mt-1">
          <span class="inline-block w-3 h-3 mr-2 bg-gray-400 rounded"></span>
          <p class="text-sm inline-block">Total swab tests</p>
          <p class="float-right inline-block text-sm font-medium dark:text-gray-300">{{ ph.data.tests | numeral('0,0') }}</p>
      </div>
      <div class="mt-6">
        <p class="text-xs font-medium text-gray-400 italic dark:text-gray-500">Updated on : {{ new Date(ph.data.updated) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, computed, watch } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  setup(props,{root}) {
    let fetch = reactive({
      state: true
    })
    let error = ref(false)
    let ph = ref({})
    let refresh = computed(() => root.$store.getters.getRefreshState)
    
    const fetchData = (async () => {
       fetch.state = await true
       await root.$axios.$get('https://corona.lmao.ninja/v2/countries/philippines')
         .then(async res => {
           await root.$store.commit('setPhData', res)
           ph.value = await root.$store.getters.getPhData
           fetch.state = await false
         })
         .catch(err => {
           //console.log(err)
           error.value = true
         })
    })
    
    watch(refresh, (newV, oldV) => {
      if(newV) {
        fetchData()
      }
    })
    
    onMounted(() => {
      fetchData()
    })
    
  return { fetchData, fetch, error, ph }
  }
})
</script>