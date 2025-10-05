<template>
    <v-container>
        <v-card title="Статья 2322" subtitle="дата создания дата модификации" text="лялялляяляллялляля">
            <v-card-actions>
                 <RouterLink :to="`/article/:id/edit`"><v-btn>Редактировать</v-btn></RouterLink> 
                 <RouterLink :to="`/article/:id/delete`"><v-btn>Удалить</v-btn></RouterLink>
            </v-card-actions>
        </v-card>
        <h2>Комментарии</h2>
        <v-list lines="one">
            <v-list-item
                v-for="n in 3"
                :key="n"
                :title="'текст коммента текст коммента'"
                subtitle="дата создания и дата редактирования"   
            >
            <v-card-actions>
                <RouterLink :to="`/comment/:id/edit`"><v-btn>Редактировать</v-btn></RouterLink> 
                <RouterLink :to="`/comment/:id/delete`"><v-btn>Удалить</v-btn></RouterLink> 
            </v-card-actions>
            </v-list-item>   
        </v-list>
        <h3>Добавить комментарий</h3>
        <v-textarea label="Label"></v-textarea>
        <RouterLink :to="`/comment/add`"><v-btn>Добавить</v-btn></RouterLink>

    </v-container>
</template>
<script>
</script>