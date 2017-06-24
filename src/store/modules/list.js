import list from '../../api/list'
import * as types from '../mutation-types'

// initial state
const state = {
  listData:[],
  param: {
    sortCode: 0,
    starItems: [],
    positionItem: null
  }
}

// getters
const getters = {
  listData: state => state.listData,
  param:() => state.param
}

// actions
const actions = {
  //get list data async
  getList ({ commit }) {
    list.getList(state.param,data => {
      commit(types.RECEIVE_LIST, { data })
    })
  },
  //load more data async
  loadMore ({ commit }) {
    list.getList(state.param,data => {
      commit(types.LOAD_MORE, { data })
    })
  },
  reload ({ commit }) {
    list.getList(state.param,data => {
      commit(types.RELOAD, { data })
    })
  },
}

// mutations
const mutations = {
  [types.SET_PARAM](state,config){
    console.log(config.key,config.value);
    state.param[config.key] = config.value;
  },
  //push new data to the origin
  [types.LOAD_MORE] (state, { data }) {
    state.listData.push.apply(state.listData,data);
  },
  [types.RECEIVE_LIST] (state, { data }) {
    state.listData = data
  },
  //reset and get new data
  [types.RELOAD] (state,{ data }) {
      state.listData.length = 0;
      state.listData = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
