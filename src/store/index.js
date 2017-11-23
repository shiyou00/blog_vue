import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
/* eslint-disable */
Vue.use(Vuex)
const state = {
  articleList:[]
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
