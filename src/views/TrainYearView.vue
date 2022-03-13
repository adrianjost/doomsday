<template>
  <QuestionPage :answer="correctAnswer" @next="generateNewQuestion">
    <template #title>
      Guess the doomsday weekday<br />
      for a given year.
    </template>
    <template #question>
      What's the doomsday of the year
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
  date.setMonth(3); // months start at 0!
  date.setDate(4);
  return date.getDay();
});

const minYear = 1700;
const maxYear = 2100;
const generateNewQuestion = () => {
  yearToGuess.value =
    Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
};
</script>
