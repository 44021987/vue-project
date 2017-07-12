import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/components/IndexMain'
import Article from '@/components/Article'

Vue.use(Router)

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
    }
  ]
})
