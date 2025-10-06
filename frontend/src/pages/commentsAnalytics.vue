<template>
  <v-container>
    <h1>Анализ комментариев</h1>

    <v-row>
        <v-date-picker
          v-model="dateFrom"
        >
        </v-date-picker>

      
        <v-date-picker
          v-model="dateTo"
        >
        </v-date-picker>
     
    </v-row>

    <v-btn
      color="primary"
      :disabled="!dateFrom || !dateTo"
      :to="`/comments/analytics/list?dateFrom=${dateFrom}&dateTo=${dateTo}`"
    >
      Показать комментарии
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const dateFrom = ref(null)
const dateTo = ref(null)
const dateFromMenu = ref(false)
const dateToMenu = ref(false)
</script>