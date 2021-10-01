import axios from 'axios';

const instance = axios.create({
  baseURL : process.env.VUE_APP_API_URL, 
})

function fetchNewsList(){
  return instance.get('news/1.json');
}

function fetchNewest(){
  return instance.get('/newest/1.json');
}

function fetchAsk(){
  return instance.get('/ask/1.json');
}

function fetchShow(){
  return instance.get('/show/1.json');
}

function fetchJobs(){
  return instance.get('/jobs/1.json');
}

export { 
  fetchNewsList,
  fetchNewest,
  fetchAsk,
  fetchShow,
  fetchJobs
}