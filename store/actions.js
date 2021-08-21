import { fetchNewsList, fetchNewest, fetchAsk, fetchShow, fetchJobs } from '../src/api';

export default {
  FETCH_NEWS(context){
    fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(err => console.log(err)); 
  },
  FETCH_NEWEST(){
    fetchNewest()
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  },
  FETCH_ASK(){
    fetchAsk()
      .then(({data}) => console.log(data))
      .catch(err => console.log(err));
  },
  FETCH_SHOW(){
    fetchShow()
      .then(({data}) => console.log(data))
      .catch(err => console.log(err))
  },
  FETCH_JOBS(){
    fetchJobs()
      .then(({data}) => console.log(data))
      .catch(err => console.log(err));
  }
}