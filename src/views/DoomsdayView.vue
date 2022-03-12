<template>
  <QuestionPage :answer="correctAnswer" @next="generateNewQuestion">
    <template #title>
      Guess the Doomsday<br />
      for a given year.
    </template>
    <template #question>
      What's the doomsday of <br />
      <span class="dynamic-question-content">{{ yearToGuess }}</span
      >?
    </template>
  </QuestionPage>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import QuestionPage from "../components/QuestionPage.vue";

const yearToGuess = ref<number>(2000);
const correctAnswer = computed(() => {
  const date = new Date();
  date.setFullYear(yearToGuess.value);
  date.setDate(4);
  date.setMonth(3);
  return date.getDay();
});

const generateNewQuestion = () => {
  yearToGuess.value = Math.floor(Math.random() * 100) + 2000;
};
</script>
