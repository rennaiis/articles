<template>
<v-container>
  <v-sheet class="mx-auto">
    <v-form fast-fail @submit.prevent>
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
<script>
    import {ref, onMounted} from 'vue'
    import axios from 'axios'
    import { useRouter, useRoute } from 'vue-router'
    const router = useRouter()
    const route = useRoute()
    const title = ref('')
    const content = ref('')
    onMounted(async()=>{
        const articleId = route.params.id
        const resp = await axios.get(`http://localhost:3000/article/${articleId}`)
        title.value = resp.data.title
        content.value = resp.data.content
    })
</script>