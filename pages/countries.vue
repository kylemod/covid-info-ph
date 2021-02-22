<template>
  <div>
    <div class="md:flex md:flex-wrap">
      <div class="md:w-1/2">
        <h1 class="text-lg font-semibold ">COVID-19 Coronavirus - <span class="text-gray-500 dark:text-gray-300">Countries</span></h1>
      </div>
    </div>
    <div class="md:flex md:flex-wrap mt-4">
      <Country />
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {},
  setup() {
    useMeta(() => ({
      titleTemplate: '%s | Countries'
    }))
  }
})
</script>