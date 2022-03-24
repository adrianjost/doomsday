<template>
  <div class="answer-options child-borders">
    <button
      type="button"
      :class="{ invalid: invalidOptions.includes(index) }"
      @click="submit(index)"
      v-for="(weekday, index) in weekdays"
      :key="weekday"
    >
      {{ index }} - {{ weekday }}
    </button>
    <button type="button" @click="skip">Skip</button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

const emit = defineEmits(["submit", "skip"]);
defineProps({
  invalidOptions: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
});
const submit = (answer: number) => {
  emit("submit", answer);
};
const skip = () => {
  emit("skip");
};
</script>

<style scoped>
.answer-options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;
  padding: 0;
}
.answer-options > button {
  height: 4rem;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
  padding: 0.5rem 0.25rem;
  transition: color 0.25s ease-in-out;
}
.answer-options > button:last-of-type {
  grid-column: 2 / 4;
}

.answer-options > button.invalid {
  background-color: red;
  animation-name: bounceX;
  animation-duration: 0.5s;
}

@keyframes bounceX {
  0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(5px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-5px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(4px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-4px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(2px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-2px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
}
</style>
