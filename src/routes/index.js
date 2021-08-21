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
      component : NewsView
    },
    {
      path:'/ask',
      component : AskView
    },
    {
      path:'/jobs',
      component : JobsView
    },
    {
      path:'/newest',
      component : NewestView
    },
    {
      path:'/show',
      component : ShowView
    },

  ]
});