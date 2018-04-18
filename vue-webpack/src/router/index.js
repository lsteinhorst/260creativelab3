import Vue from 'vue'
import Router from 'vue-router'
import HomePage1 from '@/components/HomePage1'
import Profile from '@/components/Profile'
import Columbine from '@/components/Columbine'
import Lily from '@/components/Lily'
import Todo from '@/components/Todo'
import SearchResults from '@/components/SearchResults'
import UserPage from '@/components/UserPage'

Vue.use(Router)

export default new Router({
  routes: [
{
    path: '/',
    name: 'HomePage1',
    component: HomePage1
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
},
{
          path: '/search',
          name: 'SearchResults',
          component: SearchResults
},
{
          path: '/user/:userID',
          name: 'UserPage',
          component: UserPage
        },
  ]
})
