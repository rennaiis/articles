<template>
    <v-container fluid>
        <h1>Список статей</h1>
        <v-data-iterator :items="items" v-slot = "{items}">
        <template v-for="(item, i) in items":key="i">
        <v-card>
          <v-card-title>
            <RouterLink :to="`/articles/${item.id}`">{{ item.title }}</RouterLink>
          </v-card-title>

          <v-card-text>
            {{ item.text }}
          </v-card-text>

          <v-card-subtitle>
            Последнее изменение: {{ item.edidedAt }}
            Создание:{{ item.createdAt }}
          </v-card-subtitle>
        </v-card>
        <br>
        </template>
        </v-data-iterator>
    </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import { RouterLink } from 'vue-router'
  const items = ref([])
  onMounted(async()=>{
    try{
        const resp = await axios.get("http://localhost:3000/articles")
        items.value = resp.data
    }catch(err){
        console.error("Ошибка при выводе списка статей", err)
    }
  })
</script>