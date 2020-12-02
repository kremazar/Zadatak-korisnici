import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewUser from "@/components/NewUser.vue";
import User from "@/components/User.vue";
Vue.use(VueRouter)
const router = new VueRouter({
routes :[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NewUser',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/User/:id',
    name: 'User',
    component: User
  },
 ],
 mode: "history",
});


export default router
