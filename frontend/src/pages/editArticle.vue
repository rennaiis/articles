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
      <v-btn class="mt-2" @click="onSubmit">Сохранить</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>


<script>
</script>