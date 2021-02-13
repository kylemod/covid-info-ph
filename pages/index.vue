<template>
  <div>
    <div class="md:flex md:flex-wrap">
      <div class="md:w-1/2">
        <h1 class="text-lg font-semibold ">COVID-19 Coronavirus - <span class="text-gray-500 dark:text-gray-300">Overview</span></h1>
      </div>
      <div class="md:w-1/2">
        <client-only>
          <countdown v-if="count" :time="300 * 1000" @end="refresh" class="md:float-right">
            <template slot-scope="props">Data will automatically refresh after <span class="font-medium dark:text-gray-300">{{ props.minutes }} minutes and {{ props.seconds }} seconds</span></template>
        </countdown>
          <div class="mt-2 md:mt-0 md:float-right">
            <t-button class="dark:bg-opacity-25 dark:text-gray-300 dark:hover:bg-opacity-50" @click="refreshNow"><refresh-cw-icon size="1x" class="inline-block mr-2"></refresh-cw-icon> Refresh now</t-button>
          </div>
        </client-only>
      </div>
    </div>

    <div class="md:flex md:flex-wrap mt-4">
      <WorldWide />
      <Philippines />
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta, ref, onMounted } from '@nuxtjs/composition-api'
import { RefreshCwIcon } from 'vue-feather-icons'

export default defineComponent({
  components: {
    RefreshCwIcon
  },
  head: {},
  setup(props,{root}) {
    let count = ref()
    
    const refresh = async () => {
      await root.$store.commit('refresh', true)
      count.value = await false
      setTimeout(() => {
        root.$store.commit('refresh', false)
        count.value = true
      }, 5 * 1000)
    }
    const refreshNow = async () => {
      await root.$store.commit('refresh', true)
      count.value = await false
      await root.$store.commit('refresh', false)
      setTimeout(() => {
        count.value = true
      }, 2000)
    }
    
    onMounted(() => {
      setTimeout(() => {
        count.value = true
      }, 1000);
    })
    
    useMeta(() => ({
      titleTemplate: '%s | Overview'
    }))
  
  return { refresh, count, refreshNow }
  }
})
</script>