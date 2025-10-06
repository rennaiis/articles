<template>
    <v-container>
        <v-card :title="article.title" 
            :subtitle="dates(dateFormat(article.createdAt), dateFormat(article.updatedAt))"
            :text="article.content">
            <v-card-actions>
                 <RouterLink :to="`/article/${article.id}/edit`"><v-btn>Редактировать</v-btn></RouterLink> 
                 <v-btn @click="deleteArticle(article.id)">Удалить</v-btn>
            </v-card-actions>
        </v-card>
        <h2>Комментарии</h2>
        <v-list lines="one">
            <v-list-item
                v-for="c in comments"
                :key="c.id"
                :title="c.content"
                :subtitle="dates(dateFormat(c.createdAt), dateFormat(c.updatedAt))" 
            >
            <v-card-actions>
                <RouterLink :to="`/comment/${article.id}/edit/${c.id}`"><v-btn>Редактировать</v-btn></RouterLink> 
                <v-btn @click="deleteComment(c.id)">Удалить</v-btn>
            </v-card-actions>
            </v-list-item>
        </v-list>
        <h3>Добавить комментарий</h3>
        <v-textarea label="Напишите комментарий" rows = 3 v-model="newComment"></v-textarea>
        <v-btn @click="addComment">Добавить</v-btn>
    </v-container>
</template>
<script setup>
    import { onMounted, ref } from 'vue'
    import axios from 'axios'
    import { RouterLink, useRoute, useRouter} from 'vue-router'

    
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
    const article = ref({title:'', content: '', createdAt: '', updatedAt:''})
    const comments = ref([])
    const newComment = ref('')
    const router = useRouter()
    const route = useRoute()
    const id = route.params.id

    async function getComments(){
        const resp = await axios.get(`http://localhost:3000/article/${id}/comments/`)
        comments.value = resp.data        
    }
    async function getArticle(){
        const resp = await axios.get(`http://localhost:3000/article/${id}`)
        article.value = resp.data        
    }
    async function addComment() {
        try{
            const payload = {content: newComment.value, articleId: Number(id)}
            const resp = await axios.post(`http://localhost:3000/article/${id}/comment`, payload)
            comments.value.push(resp.data)
            newComment.value = ''
        }catch(err){
            console.error("Ошибка при добавлении комменатрия", err)
        }
        
    }
    async function deleteComment(commentId) {
        try{
            this.comments = this.comments.filter(c => c.id !== commentId)
            const resp = await axios.delete(`http://localhost:3000/article/${id}/comment/${commentId}`)
            comments.value.push(resp.data)
        }catch(err){
            console.error("Ошибка при удалении комменатрия", err)
        }
        
    }
    async function deleteArticle(articleId) {
        try{
            const resp = await axios.delete(`http://localhost:3000/article/${articleId}`)
            this.router.push('/articles')
        }catch(err){
            console.error("Ошибка при удалении статьи", err)
        }
        
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