<script setup>
import { RouterLink } from 'vue-router';
import Receta from '@/components/Receta.vue';
import { useFavoritosStore } from '@/stores/favoritos';

const favoritos = useFavoritosStore();
</script>

<template>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>

    <h3 v-if="favoritos.noFavoritos" class="my-10 text-center text-2xl">No se han agregado favoritos, agreguelos
        <RouterLink :to="{ name: 'inicio' }" class="uppercase font-bold text-orange-500">
            aqui
        </RouterLink>
    </h3>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:gid-cols-3 my-10 gap-10">
        <Receta v-for="receta in favoritos.favoritos" :receta="receta" :key="receta.idDrink" />

    </div>
</template>