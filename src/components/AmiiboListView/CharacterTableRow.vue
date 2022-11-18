<script setup>
const props = defineProps({
  character : {
    type : Object
  }
})
</script>
<template>
  <tr>
    <td>{{character.name}}</td>
    <td>{{ character.game }}</td>
    <td><button>voir</button></td>
  </tr>
</template>
<style scoped>

</style>