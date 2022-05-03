<template>
    <div class="citacao">
        <div>
            <!-- tag que representa o corpo que eu passei dentro da chamada do componente -->
            <slot name="autor"></slot>
            <slot name="texto"></slot>
            <slot name="fonte"></slot>
        </div>
    </div>
</template>

<script>
export default {
  created() {},
  destroyed() {},
  // Ativando o componente, utilizando o keep-alive
  activated() {},
  // Destativando o componente, utilizando o keep-alive
  deactivated() {},
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

h1 {
  color: red;
}
</style>
