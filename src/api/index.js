import axios from 'axios';

const baseURL = 'https://api.hnpwa.com/v0';

function fetchNewsList(){
  return axios.get(`${baseURL}/news/1.json`);
}

function fetchNewest(){
  return axios.get(`${baseURL}/newest/1.json`);
}

function fetchAsk(){
  return axios.get(`${baseURL}/ask/1.json`);
}

function fetchShow(){
  return axios.get(`${baseURL}/show/1.json`);
}

function fetchJobs(){
  return axios.get(`${baseURL}/jobs/1.json`);
}


export { 
  fetchNewsList,
  fetchNewest,
  fetchAsk,
  fetchShow,
  fetchJobs
}