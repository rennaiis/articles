<template>
    <v-container>
        <h1>Список статей</h1>
            <v-col v-for="article in articles" :key="article.id">
                <v-card class = "pa-4 md-4">
                        <v-card-title>
                        <RouterLink :to="`/articles/${article.id}`">{{ article.title }}</RouterLink>
                        </v-card-title>
                        
                        <v-card-text>
                        {{ article.content }}
                        </v-card-text>
            
                        <v-card-subtitle>
                        Создана:{{ dateFormat(article.createdAt)}}
                        </v-card-subtitle>
                </v-card>
            </v-col>
            <RouterLink :to="`/article`">
                <v-btn color: primary >Добавить статью</v-btn>
            </RouterLink>
            <RouterLink :to="`/analytic/comments`">
                <v-btn color: primary >Анализ комментариев</v-btn>
            </RouterLink>
    </v-container>
</template>


<script setup>

  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import { RouterLink } from 'vue-router'
  function dateFormat(date){
    if (!date){
        return "-"
    }else{
        return new Date(date).toLocaleDateString()
    }
  }
  const articles = ref([])
  onMounted(async()=>{
    try{
        const resp = await axios.get("http://localhost:3000/articles")
        articles.value = resp.data
    }catch(err){
        console.error("Ошибка при выводе списка статей", err)
    }
  })
</script>