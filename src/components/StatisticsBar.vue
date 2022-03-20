<template>
  <article v-if="statistics.length > 0">
    <h3 class="headline">Your last attempts:</h3>
    <div class="stats-bar border child-borders border-primary">
      <div
        v-for="(stat, index) of statistics"
        :key="index"
        class="stats-item border"
        :class="[colorForAttempts(stat)]"
      >
        {{ stat }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  statistics: { type: Array as PropType<(number | "∞")[]>, required: true },
});

const colorForAttempts = (
  attempts: number | "∞"
): "gray" | "green" | "orange" | "red" => {
  if (attempts === 0) {
    return "gray";
  }
  if (attempts === 1) {
    return "green";
  }
  if (attempts === 2) {
    return "orange";
  }
  return "red";
};
</script>

<style scoped>
.headline {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.stats-bar {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
  grid-gap: 0.25rem;
  padding: 0.25rem;
}

.stats-item {
  border-width: 0;
  padding: 0.25rem;
}
.green {
  background-color: green;
}
.orange {
  background-color: orange;
}
.red {
  background-color: red;
}
</style>
