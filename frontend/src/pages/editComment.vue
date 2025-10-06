<template>
<v-container>
  <v-sheet class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-textarea
        v-model="content"
        :rules="contentRules"
        label="Текст комментария"
      ></v-textarea>
      <v-btn class="mt-2" @click="onSubmit">Сохранить</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>


<script>
</script>