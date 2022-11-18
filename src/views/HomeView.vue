<script setup>
import CharacterCard from "@/components/HomeView/CharacterCard.vue";
//import {computed} from "vue";

/*const getRandomTailHexa = computed(() =>{
  return  Math.floor(Math.random() * 10000001).toString(16) ;
  //marche pas pas réussi à reconstruire les ID de manière aléatoire
})*/


</script>

<template>
  <main>
    <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection </h2>
      </header>
    </section>
    <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <CharacterCard tail="039dff02"></CharacterCard>
        <CharacterCard tail="03a70102"></CharacterCard>
        <CharacterCard tail="039fff02"></CharacterCard>
      </div>
      <footer>
        <ul class="actions">
          <li><RouterLink class="button large" :to="{name: 'amiiboList'}">Liste complète</RouterLink></li>
        </ul>
      </footer>
    </section>
  </main>
</template>
