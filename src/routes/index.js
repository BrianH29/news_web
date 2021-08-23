import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import NewestView from '../views/NewestView'
import ShowView from '../views/ShowView'


Vue.use(VueRouter); 

export const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect:'/news'
    },
    {
      path:'/news',
      name: 'news',
      component : NewsView
    },
    {
      path:'/ask',
      name: 'ask',
      component : AskView
    },
    {
      path:'/jobs',
      name: 'jobs',
      component : JobsView
    },
    {
      path:'/newest',
      name : 'newest',
      component : NewestView
    },
    {
      path:'/show',
      name: 'show',
      component : ShowView
    },

  ]
});