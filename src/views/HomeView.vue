<script setup>
import CharacterCard from "@/components/HomeView/CharacterCard.vue";
</script>

<template>
  <main>
    <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>
    <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
        <CharacterCard></CharacterCard>
      </div>
      <footer>
        <ul class="actions">
          <li><RouterLink class="button large" :to="{name: 'amiiboList'}">Liste complète</RouterLink></li>
        </ul>
      </footer>
    </section>
  </main>
</template>
