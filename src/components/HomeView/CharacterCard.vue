<script setup>
import {ref,onBeforeMount } from 'vue'
import axios from "axios";
import {useRoute} from "vue-router/dist/vue-router";

const props = defineProps({
  tail : {
    type : String
  }
})

const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'
const amiibo = ref({})
const isLoading = ref(true)

const route = useRoute()

onBeforeMount(async () => {
  const response = await axios.get(`${API_ALL_AMIIBO}?tail=${props.tail}`)
  amiibo.value = response.data.amiibo[0]
  if (response.status == 200){
    isLoading.value = false
  }
})
</script>

<template>
  <div class="col-4 col-12-medium">
    <section class="middle">
      <img :src="amiibo.image"  alt="image de l'amiibo"/>
      <header>
        <h2>{{ amiibo.character }}</h2>
      </header>
      <p>{{amiibo.gameSeries}}</p>
    </section>
  </div>
</template>
<style scoped>
img{
  height: 100px;
  width: 100px;
  object-fit: scale-down;
}
</style>