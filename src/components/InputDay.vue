<template>
  <div class="answer-options">
    <button type="button" @click="submit(0)">0 - Sun</button>
    <button type="button" @click="submit(1)">1 - Mon</button>
    <button type="button" @click="submit(2)">2 - Tue</button>
    <button type="button" @click="submit(3)">3 - Wed</button>
    <button type="button" @click="submit(4)">4 - Thu</button>
    <button type="button" @click="submit(5)">5 - Fri</button>
    <button type="button" @click="submit(6)">6 - Sat</button>
    <button type="button" @click="skip">Skip</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["submit", "skip"]);
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
  grid-gap: 1px;
  padding: 1px;
}
.answer-options > button {
  color: var(--color-text-contrast);
  background: var(--color-background-contrast);
  border: 0;
  height: 5rem;
  font-weight: 500;
  font-size: 1.5rem;
}
.answer-options > button:last-of-type {
  grid-column: 2 / 4;
}
</style>
