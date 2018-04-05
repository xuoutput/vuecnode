import Vue from 'vue'
import Router from 'vue-router'

import  MainSec from '@/components/MainSec'
  import  MainList from '@/components/MainList'
  import  ArticleDel from '@/components/ArticleDel'
  import  UserDel from '@/components/UserDel'
  
  import  SideBar from '@/components/SideBar'
  
  import  SignUp from '@/components/SignUp'
  import  Login from '@/components/Login'
  import  AboutBar from '@/components/AboutBar'

  import  SearchPass from '@/components/SearchPass'
  import  Messages from '@/components/Messages'
  import  CreateTopic from '@/components/CreateTopic'
  import  Setting from '@/components/Setting'
  import  Api from '@/components/Api'
  import  About from '@/components/About'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'MainRoute',
      component: MainSec,
      children: [
        {
          path: 'home',
          name: 'HomeRoute',
          components: {
            main: MainList,
            sidebar: SideBar
          }
        }
      ]
    },
    {
      // path: '/topic/:id',
      path: '/',
      // name: 'ArticleRoute',  /* 不要放着 不然url就是当前path */
      component: MainSec,
      children: [
        {
          path: 'topic/:id',
          name: 'ArticleRoute', /* 这个从router-link 的to 来的不能放到父里面去 */          
          components: {
            main: ArticleDel,
            sidebar: SideBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: 'topics',
          name: 'CreateTopicRoute',          
          components: {
            main: CreateTopic,
            sidebar: AboutBar   /* 改下 其实都可以合并在一个sidebar中么? */
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: 'user/:loginname',
          name: 'UserRoute',          
          components: {
            main: UserDel,
            sidebar: SideBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: 'setting',
          name: 'SettingRoute',          
          components: {
            main: Setting,
            sidebar: SideBar
          }
        }
      ]
    },
    // {
    //   path: '/user/:loginname',
    //   name: 'UserRoute',
    //   components: {
    //     main: UserDel
    //   }
    // }
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: 'signup',
          name: 'SignUpRoute',          
          components: {
            main: SignUp,
            sidebar: AboutBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: 'login',
          name: 'LoginRoute',          
          components: {
            main: Login,
            sidebar: AboutBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: 'search_pass',
          name: 'SearchPassRoute',          
          components: {
            main: SearchPass,
            sidebar: AboutBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: '/messages',
          name: 'MessagesRoute',          
          components: {
            main: Messages,
            sidebar: AboutBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: '/api',
          name: 'ApiRoute',          
          components: {
            main: Api,
            // sidebar: AboutBar
          }
        }
      ]
    },
    {
      path: '/',
      component: MainSec,
      children: [
        {
          path: '/about',
          name: 'AboutRoute',          
          components: {
            main: About,
            // sidebar: AboutBar
          }
        }
      ]
    },
  ]
})
