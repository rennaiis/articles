import { createRouter, createWebHistory } from 'vue-router'
import ArticlesList from '@/pages/ArticlesList.vue'
import Article from '@/pages/Article.vue'
import addArticle from '@/pages/addArticle.vue'
import editArticle from '@/pages/editArticle.vue'
import editComment from '@/pages/editComment.vue'
import commentsAnalytics from '@/pages/CommentsAnalytics.vue'

const routes = [
  {
    path: '/',
    redirect: '/articles'
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesList
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/article',
    name: 'addArticle', 
    component: addArticle
  }, 
  {
    path: '/articles/:id/edit',
    name: "editArticle",
    component: editArticle
  }, 
  {
    path: '/articles/:articleId/comment/:id',
    name: "editComment",
    component: editComment
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
