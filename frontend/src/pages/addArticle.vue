<template>
  <v-sheet class="mx-auto" width="1000">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="Заголовок статьи"
      ></v-text-field>

      <v-textarea
        v-model="lastName"
        label="текст статьи"
      ></v-textarea>
      <v-btn class="mt-2" type="submit" block>Создать</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>

</script>