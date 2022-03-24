<template>
  <div class="question-page">
    <header>
      <h2 class="title">
        <slot name="title" />
      </h2>
      <PaperModal close="Got it!">
        <template #toggle>
          <span class="paper-btn modal-trigger">Help</span>
        </template>
        <template #content="{ id }">
          <h3 class="modal-title">Help meee...!!!</h3>
          <HelpArticle class="help-article" />
          <label class="paper-btn modal-close" :for="id">Got it!</label>
        </template>
      </PaperModal>
    </header>

    <form>
      <StatisticsBar class="stats" :statistics="statistics" />
      <p class="question">
        <slot name="question" />
      </p>
      <InputDay
        :invalidOptions="invalidOptions"
        @submit="submit"
        @skip="skip"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import InputDay from "./InputDay.vue";
import HelpArticle from "./HelpArticle.vue";
import PaperModal from "./PaperModal.vue";
import { useLocalStorage, useMediaQuery } from "@vueuse/core";
import { ref } from "vue";
import StatisticsBar from "./StatisticsBar.vue";
import confetti from "canvas-confetti";

const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

const props = defineProps({
  answer: { type: Number, required: true },
  identifier: { type: String, required: true },
});
const emit = defineEmits(["next"]);

const statistics = useLocalStorage<(number | "∞")[]>(
  `statistics-${props.identifier}`,
  []
);

const attemptsForCurrentQuestion = useLocalStorage<number>(
  `statistics-attempts-${props.identifier}`,
  0
);

const numberOfStatItems = 8;
const pushStatistics = (attempts: number | "∞") => {
  statistics.value.push(attempts);
  if (statistics.value.length > numberOfStatItems) {
    statistics.value.splice(0, statistics.value.length - numberOfStatItems);
  }
  attemptsForCurrentQuestion.value = 0;
};

const invalidOptions = useLocalStorage<number[]>(
  `statistics-invalid-options-${props.identifier}`,
  []
);

const newQuestion = (): void => {
  emit("next");
  attemptsForCurrentQuestion.value = 0;
  invalidOptions.value = [];
};

const submit = (answer: number) => {
  if (
    attemptsForCurrentQuestion.value === undefined ||
    attemptsForCurrentQuestion.value === null
  ) {
    attemptsForCurrentQuestion.value = 0;
  }
  attemptsForCurrentQuestion.value++;
  if (answer === props.answer) {
    if (prefersReducedMotion.value) {
      alert("✅ Correct! 🎉");
    } else {
      confettiExplosion();
    }
    pushStatistics(attemptsForCurrentQuestion.value);
    newQuestion();
  } else {
    if (prefersReducedMotion.value) {
      alert("👀 Guess again! 😉");
    } else {
      invalidOptions.value.push(answer);
    }
  }
};
const skip = () => {
  pushStatistics(attemptsForCurrentQuestion.value === 0 ? 0 : "∞");
  newQuestion();
};

const confettiExplosion = () => {
  var count = 150;
  var defaults = {
    origin: { y: 0.75 },
  };

  function fire(particleRatio: number, opts: Record<string, number>) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
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
header .title {
  font-size: 1.25rem;
  margin: 0;
}

.stats {
  margin: 0.5rem 0 2rem;
}

.modal-trigger {
  margin: 0;
}
.modal-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.modal-close {
  margin-top: 0.5rem !important;
  margin-bottom: 0 !important;
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
