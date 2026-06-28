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
      <v-btn class="mt-2" type="submit">Создать</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>

<script setup>
    const BACKEND = process.env.VUE_APP_ADRESS
    import { ref } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    const title = ref('')
    const content = ref('')
    const router = useRouter()

    const titleRules =[
        c => !! c ||'название не может быть пустым'
    ]
    const contentRules =[
        c => !! c ||'текст не может быть пустым'
    ]
    async function onSubmit() {
        try{
            const payload = {title: title.value, content:content.value}
            await axios.post(`${BACKEND}/article`,payload)
            router.push('/articles')
        }catch(err){
            console.error("Ошибка при создании статьи", err)
        }
    }

</script>