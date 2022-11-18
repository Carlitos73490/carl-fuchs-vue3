<script setup>
import CharacterTableRow from "../components/AmiiboListView/CharacterTableRow.vue";
import {ref,onBeforeMount } from 'vue'
import axios from "axios";


const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'
const amiibos = ref([])
const isLoading = ref(true)

onBeforeMount(async () => {
  const response = await axios.get(API_ALL_AMIIBO)
  amiibos.value = response.data.amiibo
  if (response.status === 200){
    isLoading.value = false
  }
})
</script>

<template>
  <main>
    <section id="main">
      <div class="container">
        <!-- Content -->
        <article class="box post">
          <header>
            <h2>Ma Collection</h2>
            <p>{{amiibos.length}}</p>
          </header>
          <table>
            <tr>
              <th>Character</th>
              <th>game Series</th>
              <th>Action</th>
            </tr>
            <CharacterTableRow v-if="isLoading" :character="{character : '⏳',gameSeries : '⏳',tail :'404'}"></CharacterTableRow>
            <CharacterTableRow v-for="amiibo in amiibos" :key="amiibo.tail" :character="amiibo"></CharacterTableRow>
          </table>
        </article>
      </div>
    </section>
  </main>
</template>
