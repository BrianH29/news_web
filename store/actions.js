import { fetchNewsList } from '../src/api';

export default {
  FETCH_NEWS(context){
    fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(err => console.log(err)); 
  }
}