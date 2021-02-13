const numeral = require("numeral")

export const state = () => ({
  refresh: false,
  world: [],
  ph: []
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
  }
}

export const getters = {
  getRefreshState(state) {
    return state.refresh
  },
  getWorldData(state) {
    let data = state.world
    let active = numeral(data.active).format(0,0)
    let cases = numeral(data.cases).format(0,0)
    let critical = numeral(data.critical).format(0,0)
    let deaths = numeral(data.deaths).format(0,0)
    let recovered = numeral(data.recovered).format(0,0)
    let tests = numeral(data.tests).format(0,0)
    let todayCases = numeral(data.todayCases).format(0,0)
    let todayDeaths = numeral(data.todayDeaths).format(0,0)
    let todayRecovered = numeral(data.todayRecovered).format(0,0)
    let updated = data.updated
    return { active, cases, critical, deaths, recovered, tests, todayCases, todayDeaths, todayRecovered, updated } 
  },
  getPhData(state) {
    let data = state.ph
    let active = numeral(data.active).format(0,0)
    let cases = numeral(data.cases).format(0,0)
    let critical = numeral(data.critical).format(0,0)
    let deaths = numeral(data.deaths).format(0,0)
    let recovered = numeral(data.recovered).format(0,0)
    let tests = numeral(data.tests).format(0,0)
    let todayCases = numeral(data.todayCases).format(0,0)
    let todayDeaths = numeral(data.todayDeaths).format(0,0)
    let todayRecovered = numeral(data.todayRecovered).format(0,0)
    let updated = data.updated
    return { active, cases, critical, deaths, recovered, tests, todayCases, todayDeaths, todayRecovered, updated } 
  }
}