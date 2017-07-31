import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import IndexMain from '@/components/IndexMain'
import Article from '@/components/Article'
import Users from '@/components/Users'
import About from '@/components/About'

Vue.use(Router)
Router.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'RootPath',
      component: IndexMain
    },
    {
      path: '/topic/:id',
      name: 'ArticleRouter',
      component: Article    
    },
    {
      path: '/user/:id',
      name: 'UsersRouter',
      component: Users
    },
    {
      path: '/about',
      name: 'AboutRouter',
      component: About
    },
    {
    	path: '*',
    	component: IndexMain
    }
  ]
})
