<template>
    <div class="to-do-box">
        <span class="close">&times;</span>
        <p class="text-to-do">Teste</p>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.to-do-box {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 130px;
  width: 250px;

  position: relative;

  background: linear-gradient(to right, #cb2d3e, #ef473a);

  border-radius: 10px;
}

.close {
  position: absolute;

  top: 20px;
  right: 20px;

  font-weight: bold;

  cursor: pointer;
}

.text-to-do {
  color: white;

  font-size: 20px;
}
</style>
