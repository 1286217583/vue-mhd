import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// 路由组件
// import Home from '../views/Home'
// import Classify from '../views/Classify'
// import Hello from '../views/Hello'
// import Favorite from '../views/Hello/Favorite'
// import History from '../views/Hello/History'
// import Login from '../views/Login'
// import My from '../views/My'
// import Ranking from '../views/Ranking'
// import Register from '../views/Register'
// import Search from '../views/Search'
// import SearchResult from '../views/SearchResult'
// import Vip from '../views/Vip'
// import City from '../views/city'

// 路由懒加载
// const Home = () => import('../views/Home')
// const Classify = () => import('../views/Classify')
// const Hello = () => import('../views/Hello')
// const Favorite = () => import('../views/Hello/Favorite')
// const History = () => import('../views/Hello/History')
// const Login = () => import('../views/Login')
// const My = () => import('../views/My')
// const Ranking = () => import('../views/Ranking')
// const Register = () => import('../views/Register')
// const Search = () => import('../views/Search')
// const SearchResult = () => import('../views/SearchResult')
// const Vip = () => import('../views/Vip')
// const City = () => import('../views/city')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home')
    },

    {
      path: '/classify',
      component: () => import(/* webpackChunkName: "classify" */ '../views/Classify')
    },

    {
      path: '/city',
      component: () => import(/* webpackChunkName: "city" */ '../views/city')
    },

    {
      path: '/hello',
      component: () => import(/* webpackChunkName: "hello" */ '../views/Hello'),
      children: [
        {
          path: 'favorite',
          component: () => import(/* webpackChunkName: "favorite" */ '../views/Hello/Favorite')
        },

        {
          path: 'history',
          component: () => import(/* webpackChunkName: "history" */ '../views/Hello/History')
        },

        {
          path: '',
          redirect: '/hello/history'
        }
      ]
    },

    {
      path: '/Login',
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login')
    },

    {
      path: '/my',
      component: () => import(/* webpackChunkName: "my" */ '../views/My')
    },

    {
      path: '/ranking',
      component: () => import(/* webpackChunkName: "ranking" */ '../views/Ranking')
    },

    {
      path: '/register',
      component: () => import(/* webpackChunkName: "register" */ '../views/Register')
    },

    {
      path: '/search',
      component: () => import(/* webpackChunkName: "search" */ '../views/Search')
    },

    {
      path: '/search-result',
      component: () => import(/* webpackChunkName: "search-result" */ '../views/SearchResult')
    },

    {
      path: '/vip',
      component: () => import(/* webpackChunkName: "vip" */ '../views/Vip')
    },

    {
      path: '/',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
