<template>
  <div class="question-page">
    <header>
      <h2 class="margin-none">
        <slot name="title" />
      </h2>
      <PaperModal close="Got it!">
        <template #toggle>
          <span class="paper-btn margin-none">Help</span>
        </template>
        <template #content="{ id }">
          <h2 class="margin-bottom-small">Help meee...!!!</h2>
          <HelpArticle class="help-article" />
          <label class="paper-btn margin-top margin-bottom-none" :for="id"
            >Got it!</label
          >
        </template>
      </PaperModal>
    </header>

    <form>
      <StatisticsBar class="stats" :statistics="statistics" />
      <p class="question">
        <slot name="question" />
      </p>
      <InputDay @submit="submit" @skip="skip" />
    </form>
  </div>
</template>

<script setup lang="ts">
import InputDay from "./InputDay.vue";
import HelpArticle from "./HelpArticle.vue";
import PaperModal from "./PaperModal.vue";
import { useLocalStorage } from "@vueuse/core";
import { onBeforeMount, ref } from "vue";
import StatisticsBar from "./StatisticsBar.vue";

const props = defineProps({
  answer: { type: Number, required: true },
  identifier: { type: String, required: true },
});
const emit = defineEmits(["next"]);

const statistics = useLocalStorage<(number | "∞")[]>(
  `statistics-${props.identifier}`,
  []
);

const attemptsForCurrentQuestion = ref(0);

onBeforeMount(() => {
  emit("next"); // generate a new question
});

const numberOfStatItems = 8;
const pushStatistics = (attempts: number | "∞") => {
  statistics.value.push(attempts);
  if (statistics.value.length > numberOfStatItems) {
    statistics.value.splice(0, statistics.value.length - numberOfStatItems);
  }
  attemptsForCurrentQuestion.value = 0;
};

const submit = (answer: number) => {
  attemptsForCurrentQuestion.value++;
  if (answer === props.answer) {
    alert("✅ Correct! 🎉");
    emit("next");
    pushStatistics(attemptsForCurrentQuestion.value);
  } else {
    alert("👀 Guess again! 😉");
  }
};
const skip = () => {
  emit("next");
  pushStatistics(attemptsForCurrentQuestion.value === 0 ? 0 : "∞");
};
</script>

<style scoped>
.question-page {
  display: grid;
  align-content: space-between;
  width: 100%;
  text-align: center;
}

header {
  margin: 0.5rem 0.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  text-align: left;
  grid-gap: 0.5rem;
}
h2 {
  font-size: 1.25rem;
}

.stats {
  margin: 0.5rem 0 2rem;
}

.help-article {
  overflow-y: auto;
  max-height: calc(85vh - 6rem);
}
.question {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}
</style>
