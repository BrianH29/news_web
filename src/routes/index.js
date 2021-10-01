import Vue from 'vue'
import VueRouter from 'vue-router'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'
import NewestView from '@/views/NewestView'
import ShowView from '@/views/ShowView'


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
      component: () => import ('@/views/NewsView')
    },
    {
      path:'/ask',
      name: 'ask',
      component : () => import('@/views/AskView')
    },
    {
      path:'/jobs',
      name: 'jobs',
      component : () => import('@/views/JobsView')
    },
    {
      path:'/newest',
      name : 'newest',
      component : () => import('@/views/NewestView')
    },
    {
      path:'/show',
      name: 'show',
      component : () => import('@/views/ShowView')
    },

  ]
});