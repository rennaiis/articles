<template>
    <v-container>
        <v-card :title="article.title" 
            :subtitle="dates(dateFormat(article.createdAt), dateFormat(article.updatedAt))"
            :text="article.content">
            <v-card-actions>
                 <RouterLink :to="`/article/:id/edit`"><v-btn>Редактировать</v-btn></RouterLink> 
                 <RouterLink :to="`/article/:id/delete`"><v-btn>Удалить</v-btn></RouterLink>
            </v-card-actions>
        </v-card>
        <h2>Комментарии</h2>
        <v-list lines="one">
            <v-list-item
                v-for="c in comments"
                :key="c.id"
                :title="c.content"
                subtitle="dates(dateFormat(c.createdAt), dateFormat(c.updatedAt))" 
            >
            <v-card-actions>
                <RouterLink :to="`/comment/:id/edit`"><v-btn>Редактировать</v-btn></RouterLink> 
                <RouterLink :to="`/comment/:id/delete`"><v-btn>Удалить</v-btn></RouterLink> 
            </v-card-actions>
            </v-list-item>
        </v-list>
        <h3>Добавить комментарий</h3>
        <v-textarea label="Label"></v-textarea>
        <RouterLink :to="`/comment/add`"><v-btn>Добавить</v-btn></RouterLink>

    </v-container>
</template>
<script setup>
    import { onMounted, ref } from 'vue'
    import axios from 'axios'
    import { RouterLink, useRoute, useRouter } from 'vue-router'

    
    function dateFormat(date){
        if (!date){
            return "-"
        }else{
            return new Date(date).toLocaleDateString()
        }
    }
    function dates(d1, d2){
        return `создано ${d1}, изменено ${d2}`
    }
    const article = ref({title:'', content: '', creratedAt: '', updatedAt:''})
    const comments = ref([])
    const newComment = ref()
    const route = useRoute()
    const router = useRouter()
    const id = route.params.id
    async function getComments(){
        const resp = await axios.get(`http://localhost:3000/article/${id}/comments/`)
        comments.value = resp.data        
    }
    async function getArticle(){
        const resp = await axios.get(`http://localhost:3000/article/${id}`)
        article.value = resp.data        
    }
    
    onMounted(async()=>{
        try{
            await getArticle()
            await getComments()
        }catch(err){
            console.error("Ошибка", err)
        }
    })
    

</script>