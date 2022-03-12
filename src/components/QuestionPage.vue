<template>
  <main>
    <header>
      <h2>
        <slot name="title" />
      </h2>
    </header>
    <form>
      <p class="question">
        <slot name="question" />
      </p>
      <InputDay @submit="submit" />
    </form>
  </main>
</template>

<script setup lang="ts">
import InputDay from "./InputDay.vue";

const props = defineProps({
  answer: Number,
});
const emit = defineEmits(["done"]);

const submit = (answer: number) => {
  if (answer === props.answer) {
    alert("✅ Correct! 🎉");
    emit("done", answer);
  } else {
    alert("👀 Guess again! 😉");
  }
};
</script>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
  align-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  margin: 2rem 0;
}

.question {
  font-size: 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
}
</style>
