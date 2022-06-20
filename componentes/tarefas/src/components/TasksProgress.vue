<template>
    <div class="tasks-progress">
        <span class="progress-value">{{ progress }}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.tasks-progress {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 80%;

  margin-bottom: 15px;

  border: 1px solid #fff;
  border-radius: 8px;

  color: #fff;
}

.progress-bar {
  position: absolute;

  align-self: flex-start;

  height: 100%;

  border-radius: 8px;

  background: #4caf50;
}

.progress-value {
  z-index: 1;

  font-size: 1.5rem;
}
</style>
