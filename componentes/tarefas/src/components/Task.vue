<template>
    <div @click="$emit('taskStateChanged', task)" class="task" :class="stateClass">
        <span @click.stop="$emit('taskDeleted', task)" class="close">X</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style scoped>
.task {
  box-sizing: border-box;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 150px;

  padding: 10px;

  border-radius: 8px;

  font-size: 2rem;
  font-weight: 300;

  cursor: pointer;
  user-select: none;
}

.pending {
  border-left: 12px solid #b73229;

  background-color: #f44336;
}

.done {
  color: #ddd;

  border-left: 12px solid #0a8e08;

  background-color: #4cae50;

  text-decoration: line-through;
}

.pending .close {
  background-color: #b73229;
}

.done .close {
  background-color: #0a8f08;
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  width: 20px;

  position: absolute;

  right: 10px;
  top: 10px;

  font-size: 0.8rem;
  font-weight: 600;

  border-radius: 10px;
}
</style>
