const numeral = require("numeral")

export const state = () => ({
  refresh: false,
  world: [],
  ph: [],
  countries: []
})

export const mutations = {
  refresh(state, value) {
    state.refresh = value
  },
  setWorldData(state, data) {
    state.world = data
  },
  setPhData(state, data) {
    state.ph = data
  },
  setCountriesData(state, data) {
    state.countries = data
  }
}

export const getters = {
  getRefreshState(state) {
    return state.refresh
  },
  getWorldData(state) {
    let data = state.world
    return { data } 
  },
  getPhData(state) {
    let data = state.ph
    return { data }
  },
  getCountriesData(state) {
    return state.countries
  }
}