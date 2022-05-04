<template>
	<div id="app">
		<h1>Tarefas</h1>
		<div class="progress-bar">
			<div class="progress" :style="[ { width: `${progress}%` } ]">
				<p>{{ progress }}%</p>
			</div>
		</div>
		<div class="container-plus">
			<input type="text">
			<div class="plus-container">
				+
			</div>
		</div>
		<div class="to-do-container" v-if="tarefas.length">
			<Tarefa  />
		</div>
		<span class="text-not-to-do" v-else>Você está com tarefas em dia!!</span>
	</div>
</template>

<script>
import Tarefa from "./components/Tarefa.vue";

export default {
  components: {
    Tarefa,
  },
  data() {
    return {
      progress: 0,
      tarefas: [],
    };
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 20px;

  margin: 20px 0;

  border-radius: 5px;

  border: 1px solid #aaa;
}

.progress-bar .progress {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  /* background: #8e44ad; */
}

.container-plus {
  display: flex;
  align-items: center;

  width: 30%;
  height: 30px;

  border-radius: 10px;
  border: 2px solid #aaa;
}

.container-plus input {
  width: 90%;

  padding: 5px;

  font-size: 15px;

  background: none;
  outline: none;
  border: none;

  color: white;
}

.container-plus .plus-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10%;
  height: 100%;

  background: #3498db;

  font-weight: 700;
  font-size: 20px;

  border-left: 1px solid white;
  border-radius: 0px 10px 10px 0;

  color: white;

  cursor: pointer;
}

.to-do-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  width: 80%;
  height: 200px;

  margin: 10px 0;
}

.text-not-to-do {
  margin: 10px 0;

  font-size: 18px;
}
</style>
