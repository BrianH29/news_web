export default {
  SET_NEWS(state, news){
    state.newsList = news;
  },
  SET_NEWEST(state, newest){
    state.newestList = newest;
  },
  SET_ASK(state, ask){
    state.askList = ask;
  },
  SET_SHOW(state, show){
    state.showList = show;
  },
  SET_JOBS(state, jobs){
    state.jobsList = jobs; 
  }
}