
import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/AppMain'
import AppNews from '@/components/AppNews'
import AppNewsInside from '@/components/news/AppNewsInside'
import AppNewsOutside from '@/components/news/AppNewsOutside'
import AppNewsDetail from '@/components/news/AppNewsDetail'

Vue.use(Router)

const routes = [
  
  // {path:'',component:AppMain},
  {path:'',redirect:'/main'},
  {path:'/main',component:AppMain,name:'main'},
  {path:'/news',component:AppNews,children:[
    // {path:'',component:AppNewsInside},
    {path:'',redirect:'inside',name:'news'},
    {path:'inside',component:AppNewsInside,name:'inside'},
    {path:'outside',component:AppNewsOutside,name:'outside'},
    {path:'detail/:id',component:AppNewsDetail,name:'detail'}
  ]},
  {path:'**',redirect:'/main'},
  
]

const router = new Router({
  routes
})

export default router