import Vue from 'vue'
import Vuex from '../vuex/dist/vuex.common'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 11
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    count: 21
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  },
  state: {
    count: 1
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  },
  strict: true,
})
