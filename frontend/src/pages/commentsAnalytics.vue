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

    
    <RouterLink :to="dateFrom && dateTo ? `/analytic/comments/list?dateFrom=${dateFrom.getTime()}&dateTo=${dateTo.getTime()}`:'#'">
        <v-btn color="primary":disabled="!dateFrom || !dateTo">
        Показать комментарии
        </v-btn></RouterLink>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue'
    const dateFrom = ref()
    const dateTo = ref()
</script>