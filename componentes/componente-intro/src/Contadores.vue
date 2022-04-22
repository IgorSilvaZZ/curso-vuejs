<template>
  <div class="contadores">
    <h1>Contador</h1>
    <app-contador v-for="c in 5" :key="c"></app-contador>
  </div>
</template>

<script>
import Contador from "./Contador.vue";

export default {
  name: "ContadoresComponent",
  components: {
    "app-contador": Contador,
  },
};
</script>

<style></style>
