import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home.vue')
const Vidio = () => import('../pages/vidio/Vidio.vue')
const Radio = () => import('../pages/radio/Radio.vue')
const Group = () => import('../pages/group/Group.vue')
const Profile = () => import('../pages/profile/Profile.vue')

Vue.use(Router)

const routes = [
  {
    path : "/",
    redirect : '/Home'
  },
  {
    path : '/home',
    component : Home
  },
  {
    path : '/vidio',
    component : Vidio
  },
  {
    path : '/radio',
    component : Radio
  },
  {
    path : '/group',
    component : Group
  },
  {
    path : '/profile',
    component : Profile
  },  
]

const router = new Router({
  routes,
  mode : 'history'
})

export default router
