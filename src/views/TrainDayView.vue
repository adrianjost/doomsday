<template>
  <QuestionPage
    identifier="train-day"
    :answer="correctAnswer"
    @next="generateNewQuestion"
  >
    <template #title>
      Guess the weekday <br />based on a given doomsday.
    </template>
    <template #question>
      What's the weekday of <br />
      <span class="dynamic-question-content">
        {{ humandReadableMonth }}.
        {{ dateToGuess.getDate().toString().padStart(2, "0") }} </span
      >? <template v-if="leapYear">(leap year)</template
      ><template v-else>(no leap year)</template><br />
      Doomsday is a
      <span class="dynamic-question-content">{{ doomsdayHumanReadable }}</span
      >.
    </template>
  </QuestionPage>
</template>

<script setup lang="ts">
import { randomDate } from "@/utils";
import { useLocalStorage } from "@vueuse/core";
import { computed } from "vue";
import QuestionPage from "../components/QuestionPage.vue";

const dateToGuessStorage = useLocalStorage<number>(
  "question-train-day-view",
  Date.now()
);
const dateToGuess = computed<Date>({
  get: () => new Date(dateToGuessStorage.value),
  set: (value) => {
    dateToGuessStorage.value = value.getTime();
  },
});

const correctAnswer = computed(() => {
  return dateToGuess.value.getDay();
});

const leapYear = computed(() => {
  const year = dateToGuess.value.getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
});
const doomsday = computed<number>(() => {
  const date = new Date();
  date.setFullYear(dateToGuess.value.getFullYear());
  date.setMonth(3); // months start at 0!
  date.setDate(4);
  return date.getDay();
});
const weekdays: Record<number, string> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
} as const;
const doomsdayHumanReadable = computed<string>(() => {
  const weekday = weekdays[doomsday.value];
  if (weekday === undefined) {
    throw new Error("invalid weekday");
  }
  return weekday;
});

const months: Record<number, string> = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
} as const;
const humandReadableMonth = computed<string>(() => {
  const month = months[dateToGuess.value.getMonth()];
  if (month === undefined) {
    throw new Error("invalid month");
  }
  return month;
});

const generateNewQuestion = () => {
  dateToGuess.value = randomDate();
};
</script>
