import { createRouter, createWebHistory } from 'vue-router'
import ArticlesList from '@/pages/ArticlesList.vue'
import Article from '@/pages/Article.vue'
import addArticle from '@/pages/addArticle.vue'
import editArticle from '@/pages/editArticle.vue'
import commentsAnalytics from '@/pages/CommentsAnalytics.vue'

const routes = [
  {
    path: '/articles',
    name: 'Articles',
    component: ArticlesList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
