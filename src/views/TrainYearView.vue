<template>
  <QuestionPage
    identifier="train-year"
    :answer="correctAnswer"
    @next="generateNewQuestion"
  >
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
import { randomDate } from "@/utils";
import { useLocalStorage } from "@vueuse/core";
import { computed } from "vue";
import QuestionPage from "../components/QuestionPage.vue";

const yearToGuess = useLocalStorage<number>("question-year-view", 2000);

const correctAnswer = computed(() => {
  const date = new Date();
  date.setFullYear(yearToGuess.value);
  date.setMonth(3); // months start at 0!
  date.setDate(4);
  return date.getDay();
});

const generateNewQuestion = () => {
  yearToGuess.value = randomDate().getFullYear();
};
</script>
