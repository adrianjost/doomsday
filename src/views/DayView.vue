<template>
  <QuestionPage
    :answer="correctAnswer"
    @next="generateNewQuestion"
    identifier="test"
  >
    <template #title>
      Guess the weekday<br />
      for a given date.
    </template>
    <template #question>
      What's the weekday of <br />
      <span class="dynamic-question-content"
        >{{ dateToGuess.getFullYear() }}-{{
          (dateToGuess.getMonth() + 1).toString().padStart(2, "0")
        }}-{{ dateToGuess.getDate().toString().padStart(2, "0") }}</span
      >?
    </template>
  </QuestionPage>
</template>

<script setup lang="ts">
import { randomDate } from "@/utils";
import { computed, ref } from "vue";
import QuestionPage from "../components/QuestionPage.vue";

const dateToGuess = ref<Date>(new Date());
const correctAnswer = computed(() => {
  return dateToGuess.value.getDay();
});

const generateNewQuestion = () => {
  dateToGuess.value = randomDate();
};
</script>
