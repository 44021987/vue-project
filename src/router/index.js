import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/components/IndexMain'
import Article from '@/components/Article'
import Users from '@/components/Users'

Vue.use(Router)
Router.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
