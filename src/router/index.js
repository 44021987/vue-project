import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/index'
// import IndexMain from '@/components/IndexMain'
// import Article from '@/components/Article'
// import Users from '@/components/Users'
// import About from '@/components/About'
const oImport = require('./import_' + process.env.NODE_ENV)

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
      component: oImport("index")
    },
    {
      path: '/list',
      name: 'RootPath',
      component: oImport("indexMain")
    },
    {
      path: '/topic/:id',
      name: 'ArticleRouter',
      component: oImport("Article")
    },
    {
      path: '/user/:id',
      name: 'UsersRouter',
      component: oImport("Users")
    },
    {
      path: '/about',
      name: 'AboutRouter',
      component: oImport("About")
    },
    {
    	path: '*',
    	component: oImport("indexMain")
    }
  ]
})
