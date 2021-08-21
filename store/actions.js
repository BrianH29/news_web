import { fetchNewsList, fetchNewest, fetchAsk, fetchShow, fetchJobs } from '../src/api';

export default {
  FETCH_NEWS(context){
    fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(err => console.log(err)); 
  },
  FETCH_NEWEST({ commit }){
    fetchNewest()
      .then(({ data }) => commit('SET_NEWEST',data))
      .catch(err => console.log(err));
  },
  FETCH_ASK({ commit }){
    fetchAsk()
      .then(({data}) => commit('SET_ASK', data))
      .catch(err => console.log(err));
  },
  FETCH_SHOW({ commit }){
    fetchShow()
      .then(({ data }) => commit('SET_SHOW',data))
      .catch(err => console.log(err))
  },
  FETCH_JOBS({ commit }){
    fetchJobs()
      .then(({data}) => commit('SET_JOBS', data))
      .catch(err => console.log(err));
  }
}