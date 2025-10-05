<template>
    <v-container fluid>
        <h1>Список статей</h1>
        <v-data-iterator :items="items" v-slot = "{items}">
        <template v-for="(item, i) in items":key="i">
        <v-card>
          <v-card-title>
            заголовок-ссылка
          </v-card-title>

          <v-card-text>
            содержимое статьи
          </v-card-text>

          <v-card-subtitle>
            Последнее изменение: 
            Создание: 
          </v-card-subtitle>
        </v-card>
        <br>
        </template>
        </v-data-iterator>
    </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const page = ref(1)
  const items = Array.from({ length: 15 }, (k, v) => ({
    title: 'Item ' + v + 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
  }))
</script>
