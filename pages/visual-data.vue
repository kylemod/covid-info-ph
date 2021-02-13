<template>
  <div>
    <div class="md:flex md:flex-wrap">
      <div class="md:w-1/2">
        <h1 class="text-lg font-semibold ">COVID-19 Coronavirus - <span class="text-gray-500 dark:text-gray-300">Visual Data</span></h1>
      </div>
    </div>
    <div class="flex h-screen justify-center items-center -mt-64">
      <div class="text-center bg-yellow-500 bg-opacity-25 px-4 py-2 rounded-md shadow text-yellow-700 dark:text-yellow-500">
          <h1 class="text-lg"><span><alert-circle-icon size="22" class="inline"></alert-circle-icon></span> This page is under development...</h1>
          <p class="text-md">Will be done soon.</p>
      </div>
  </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import { AlertCircleIcon } from 'vue-feather-icons'

export default defineComponent({
  components: {
    AlertCircleIcon
  },
  head: {},
  setup() {
    useMeta(() => ({
      titleTemplate: '%s | Visual Data'
    }))
  }
})
</script>