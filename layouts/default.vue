<template>
  <div :class="{ 'dark' : mode.dark }">
    <nav class="bg-gray-100 fixed w-screen border-b-1 shadow dark:bg-gray-900 dark:border-gray-700 z-30" :class="{ 'h-full' : menu }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 ">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
             <span class="text-purple-500">
               <font-awesome-icon :icon="['fas','virus']" class="fa-2x" />
             </span>
              <a class="text-gray-700 inline-block ml-2 text-xl hover:text dark:text-gray-300" href="#!">Covid Info PH</a>
            <div class="hidden lg:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nuxt-link to="/" class="text-gray-800 hover:text-purple block px-3 py-2 rounded-md text-sm dark:text-gray-300 dark:hover:text-purple-400">Overview</nuxt-link>

                <nuxt-link to="/philippines" class="text-gray-800 hover:text-purple block px-3 py-2 rounded-md text-sm dark:text-gray-300 dark:hover:text-purple-400">Philippines</nuxt-link>

                <nuxt-link to="/visual-data" class="text-gray-800 hover:text-purple block px-3 py-2 rounded-md text-sm dark:text-gray-300 dark:hover:text-purple-400">Visual Data</nuxt-link>

              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <button class="focus:outline-none">
              <span v-if="mode.dark">
                <sun-icon size="23" class="text-gray-500 hover:text-purple-400 inline-block ml-3 dark:text-gray-300" @click="toggleLight"></sun-icon>
              </span>
              <span v-else>
                <moon-icon size="23" class="text-gray-500 hover:text-purple-400 inline-block ml-3" @click="toggleDark"></moon-icon>
              </span>
            </button>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <!-- Mobile menu button -->
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800" @click="menu = !menu">
              <span class="sr-only">Open main menu</span>
              <span v-if="!menu">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
              <span v-else>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="lg:hidden h-full pt-2 border-t-1 dark:border-gray-700" :class="{ 'block' : menu, 'hidden' : !menu  }">
        <span class="text-gray-700 text-md uppercase ml-4 font-medium dark:text-gray-500">Links</span>
        <div class="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <client-only>
            <span @click="close">
              <nuxt-link to="/" class="text-gray-800 hover:text-purple block px-3 py-2 rounded-md text-sm dark:text-gray-300 dark:hover:text-purple-400">Overview</nuxt-link>
            </span>
            <span @click="close">
              <nuxt-link to="/philippines" class="text-gray-800 hover:text-purple block px-3 py-2 rounded-md text-sm dark:text-gray-300 dark:hover:text-purple-400">Philippines</nuxt-link>
            </span>
            <span @click="close">
              <nuxt-link to="/visual-data" class="text-gray-800 hover:text-purple block px-3 py-2 rounded-md text-sm dark:text-gray-300 dark:hover:text-purple-400">Visual Data</nuxt-link>
            </span>
          </client-only>
        </div>
        <span class="text-gray-700 text-md uppercase ml-4 font-medium dark:text-gray-500 mt-1">More</span>
        <div class="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <button class="focus:outline-none">
            <span v-if="mode.dark">
              <moon-icon size="23" class="text-gray-500 hover:text-purple-400 inline-block ml-1 dark:text-gray-300" @click="toggleLight"></moon-icon>
            </span>
            <span v-else>
              <sun-icon size="23" class="text-gray-500 hover:text-purple-400 inline-block ml-1 dark:text-gray-300" @click="toggleDark"></sun-icon>
            </span>
          </button>
        </div>
      </div>
    </nav>
    <main>
      <div class="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div class="container mt-16 text-gray-700 dark:text-gray-400">
          <Nuxt />
        </div>
      </div>
    </main>
    <client-only>
      <t-dialog name="named-dialog" icon="question" type="confirm">
        <template slot="icon">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" /></svg>
      </template>
      </t-dialog>
    </client-only>
  </div>
</template>

<script>
import { MoonIcon, SunIcon } from 'vue-feather-icons'
import { defineComponent, ref, reactive, onMounted, useMeta } from '@nuxtjs/composition-api' 
  
export default defineComponent({
  components: {
    MoonIcon,
    SunIcon
  },
  head: {},
  setup(props,{root}){
    let menu = ref(false)
    let mode  = reactive({
      dark: false
    })
    let body = reactive({
      class : ''
    })
    
    let toggleLight = () => {
      root.$colorMode.preference = 'light'
      mode.dark = false
      body.class = 'bg-gray-100'
    }
    let toggleDark = () => {
      root.$colorMode.preference = 'dark'
      mode.dark = true
      body.class = 'bg-gray-900'
    }
    
    let close = () => {
      setTimeout(() => menu.value = false , 200)
    }
    
    onMounted(() => {
      if(localStorage.getItem("nuxt-color-mode") == "dark") {
        mode.dark = true
        body.class = 'bg-gray-900'
      }
      if(localStorage.getItem("nuxt-color-mode") == "light") {
        mode.dark = false
        body.class = 'bg-gray-100'
      } 
      if(!localStorage.getItem('darkmode-info')) {
      root.$dialog.confirm('Dark Mode ?', "Dark Mode is now available. Do you want to set it into dark mode ?", 'info')
        .then(res => {
          if(res.isOk) {
            root.$colorMode.preference = 'dark'
            mode.dark = true
            body.class = 'bg-gray-900'
          }
          localStorage.setItem('darkmode-info', true)
        })
      }
    })
    
    useMeta(() => ({
      bodyAttrs: {
        class: `font-sans antialiased ${body.class}`
      }
    }))
    
  return { menu, mode, toggleLight, toggleDark, body, close }
  }
})
</script>

<style>
  .border-b-1 {
    border-bottom-width: 1px;
  }
  .border-t-1 {
    border-top-width: 1px;
  }
  .nav-active {
    @apply text-white bg-purple-500 dark:bg-opacity-25 dark:text-white;
  }
</style>