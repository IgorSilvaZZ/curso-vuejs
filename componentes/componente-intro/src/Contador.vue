<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  name: "ContadorComponent",
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style scoped>
span {
  height: 30px;

  border-bottom: 1px solid #ccc;

  padding: 5px 30px;
}

button {
  height: 30px;
  width: 30px;

  margin-left: 10px;

  border-radius: 10px;

  background: coral;

  outline: none;
}
</style>
