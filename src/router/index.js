
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppMovie from '../components/movie/AppMovie.vue'




const routes = [
   
   {path:'',redirect:'/main'},
   {path:'/main',name:'main',component:AppMain},
   {path:'/movie',name:'movie',component:AppMovie},
   {path:'**',redirect:'/main'}

  
]

const router = new Router({
  routes,
})

export default router