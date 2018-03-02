import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Profile from '@/components/Profile'
import Columbine from '@/components/Columbine'
import Lily from '@/components/Lily'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
{
    path: '/',
    name: 'HomePage',
    component: HomePage
},
{
    path: '/profile',
    name: 'Blue Spruce',
    component: Profile
},
{
    path: '/columbine',
    name: 'Columbine',
    component: Columbine
},
{
    path: '/lily',
    name: 'Lily',
    component: Lily
},
{
    path: '/todo',
    name: 'Todo',
    component: Todo
}

  ]
})
