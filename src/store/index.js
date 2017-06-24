import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import pois from './modules/pois'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    pois
  }
})
