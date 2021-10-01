import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    newsList : [],
    newestList : [],
    askList: [],
    showList : [],
    jobsList : [],
  },
  actions,
  mutations
});
