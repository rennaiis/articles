<template>
<v-container>
  <v-sheet class="mx-auto">
    <v-form fast-fail @submit.prevent="onSubmit">
      <v-textarea
        v-model="content"
        :rules="contentRules"
        label="Текст комментария"
      ></v-textarea>
      <v-btn class="mt-2" type="submit">Сохранить</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>


<script setup>
   import {ref, onMounted} from 'vue'
    import axios from 'axios'
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()
    const content = ref('')
    const commentId = route.params.id
    const articleId = route.params.articleId
    onMounted(async()=>{
        const resp = await axios.get(`${process.env.VUE_APP_API_ADRESS}/article/${articleId}/comment/${commentId}`)
        content.value = resp.data.content
    })
    async function onSubmit() {
        try{
            const payload = {content:content.value}
            await axios.put(`${process.env.VUE_APP_API_ADRESS}/article/${articleId}/comment/${commentId}`,payload)
            router.push(`/articles/${articleId}`)
        }catch(err){
            console.error("Ошибка при редактировании комментария", err)
        }
    }
</script>