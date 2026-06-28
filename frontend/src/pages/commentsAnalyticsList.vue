<template>
  <v-container>

    <div v-if="articles.length === 0">Нет комментариев за выбранный период</div>
    <h1>Комментарии за выбранный период</h1>
    <v-card v-for="article in articles" :key="article.id">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-text>
        <div v-for="comment in article.Comments" :key="comment.id">
           {{ comment.content }} 
           {{ dateFormat(comment.createdAt)}}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
    const BACKEND = process.env.VUE_APP_ADRESS
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import axios from 'axios'

    const route = useRoute()
    const articles = ref([])
    function dateFormat(date){
        if (!date){
            return "-"
        }else{
            return new Date(date).toLocaleDateString()
        }
    }
    onMounted(async () => {
        const query = route.query
        try {
            
            const resp = await axios.get(`${BACKEND}/analytic/comments`, {
            params: {
                dateFrom: query.dateFrom,
                dateTo: query.dateTo
            }
            })
            articles.value = resp.data
        } catch (err) {
            console.error(err)
        }
    })
</script>