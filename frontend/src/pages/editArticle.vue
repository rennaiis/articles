<template>
<v-container>
  <v-sheet class="mx-auto">
    <v-form fast-fail @submit.prevent="onSubmit">
      <v-text-field
        v-model="title"
        :rules="titleRules"
        label="Заголовок статьи"
      ></v-text-field>

      <v-textarea
        v-model="content"
        :rules="contentRules"
        label="текст статьи"
      ></v-textarea>
      <v-btn class="mt-2" type="submit">Сохранить</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>
<script setup>
    const BACKEND = process.env.VUE_APP_ADRESS
    import {ref, onMounted} from 'vue'
    import axios from 'axios'
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()
    const title = ref('')
    const content = ref('')
    onMounted(async()=>{
        const articleId = route.params.id
        const resp = await axios.get(`${BACKEND}/article/${articleId}`)
        title.value = resp.data.title
        content.value = resp.data.content
    })
    async function onSubmit() {
        try{
            const articleId = route.params.id
            const payload = {title: title.value, content:content.value}
            await axios.put(`${BACKEND}/article/${articleId}`,payload)
            router.push('/articles')
        }catch(err){
            console.error("Ошибка при редактировании статьи", err)
        }
    }
</script>