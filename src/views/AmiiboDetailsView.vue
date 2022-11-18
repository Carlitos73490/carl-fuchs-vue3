<script setup>
import {ref,onBeforeMount } from 'vue'
import axios from "axios";
import {useRoute} from "vue-router/dist/vue-router";

const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'
const amiibo = ref({})
const isLoading = ref(true)

const route = useRoute()

onBeforeMount(async () => {
  const response = await axios.get(`${API_ALL_AMIIBO}?tail=${route.params.tail}`)
  amiibo.value = response.data.amiibo[0]
  if (response.status == 200){
    isLoading.value = false
  }
})
</script>
<template>
  <main>
    <section id="main">
      <div class="container">
        <div v-if="amiibo.character" class="row">
          <div class="col-4 col-12-medium">
            <!-- Sidebar -->
            <section class="box">
              <header>
                <h3>Infos</h3>
              </header>
              <p> amiiboSeries: <b>{{ amiibo.amiiboSeries }}</b> <br />
                character: {{ amiibo.character }}<br />
                gameSeries: {{ amiibo.gameSeries }}<br />
                type: {{ amiibo.type }}
              </p>
            </section>
            <section class="box">
              <header>
                <h3>Dates sorties</h3>
              </header>
              <ul class="divided">
                <li v-for="(currentRelease,key) in amiibo.release">{{key}}: {{currentRelease}}</li>
              </ul>
            </section>
          </div>
          <div class="col-8 col-12-medium imp-medium">
            <!-- Content -->
            <article class="box post">
              <a href="#" class="featured"><img :src="amiibo.image" alt="" /></a>
              <header>
                <h2>{{ amiibo.name }}</h2>
                <p>{{ amiibo.type }}</p>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
