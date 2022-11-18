<script setup>
import CharacterTableRow from "../components/AmiiboListView/CharacterTableRow.vue";
</script>

<template>
  <main>
    <section id="main">
      <div class="container">
        <!-- Content -->
        <article class="box post">
          <header>
            <h2>Ma Collection</h2>
            <p>(ici le nombre d'amiibo)</p>
          </header>
          <table>
            <tr>
              <th>Character</th>
              <th>game Series</th>
              <th>Action</th>
            </tr>
            <CharacterTableRow :character="{name : 'Mario',game:'Super Mario'}"></CharacterTableRow>
            <CharacterTableRow :character="{name : 'Luigi',game:'Super Mario'}"></CharacterTableRow>
          </table>
        </article>
      </div>
    </section>
  </main>
</template>
