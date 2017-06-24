import poi from '../../api/pois'
import * as types from '../mutation-types'

// initial state
const state = {
  filter: []
}

// getters
const getters = {
  allFilters: function(state) {
    return state.filter;
  }
}

// actions
const actions = {
  getFilters ({ commit }) {
    poi.getPois(pois => {
      commit(types.RECEIVE_POIS, { pois })
    })
  },
}

// mutations
const mutations = {
  [types.RECEIVE_POIS] (state, { pois }) {
    state.filter = pois
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
