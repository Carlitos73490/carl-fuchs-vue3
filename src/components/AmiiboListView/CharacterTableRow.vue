<script setup>
const props = defineProps({
  character : {
    type : Object
  }
})


</script>
<template>
  <tr>
    <td>{{props.character.character}}</td>
    <td>{{ props.character.gameSeries }}</td>
    <td><RouterLink  :to="{name: 'amiiboDetails',params :{ tail : props.character.tail}}"><button>voir</button></RouterLink> </td>
  </tr>
</template>
<style scoped>

</style>