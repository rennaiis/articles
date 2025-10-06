<template>
  <v-sheet class="mx-auto" width="1000">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="titleRules"
        label="Заголовок статьи"
      ></v-text-field>

      <v-textarea
        v-model="lastName"
        :rules="contentRules"
        label="текст статьи"
      ></v-textarea>
      <v-btn class="mt-2" type="submit" block>Создать</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import axios from 'axios'
    const titleRules =[
        c => !! c ||'название не может быть пустым'
    ]
    const contentRules =[
        c => !! c ||'текст не может быть пустым'
    ]

</script>