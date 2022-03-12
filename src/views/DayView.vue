<template>
  <QuestionPage :answer="correctAnswer" @next="generateNewQuestion">
    <template #title>
      Guess the weekday<br />
      for a given date.
    </template>
    <template #question>
      What's the weekday of <br />
      <span class="dynamic-question-content"
        >{{ dateToGuess.getFullYear() }}-{{
          (dateToGuess.getMonth() + 1).toString().padStart(2, "0")
        }}-{{ dateToGuess.getDay().toString().padStart(2, "0") }}</span
      >?
    </template>
  </QuestionPage>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import QuestionPage from "../components/QuestionPage.vue";

const dateToGuess = ref<Date>(new Date());
const correctAnswer = computed(() => {
  return dateToGuess.value.getDay();
});

const generateNewQuestion = () => {
  // generate Date object for random date between 1800 and 2200
  const minYear = 1800;
  const maxYear = 2200;
  const randomYear =
    Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 30) + 1;
  dateToGuess.value = new Date(randomYear, randomMonth, randomDay);
};
</script>
