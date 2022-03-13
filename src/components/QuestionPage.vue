<template>
  <div class="question-page">
    <header>
      <h2 class="margin-none">
        <slot name="title" />
      </h2>
      <PaperModal close="Got it!">
        <template #toggle>
          <span class="paper-btn btn-small margin-top-small margin-bottom-none"
            >Help</span
          >
        </template>
        <template #content="{ id }">
          <h2 class="margin-bottom-small">Help mee!!!</h2>
          <HelpArticle class="help-article" />
          <label class="paper-btn margin-top margin-bottom-none" :for="id"
            >Got it!</label
          >
        </template>
      </PaperModal>
    </header>
    <form>
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

const props = defineProps({
  answer: Number,
});
const emit = defineEmits(["next"]);

const submit = (answer: number) => {
  if (answer === props.answer) {
    alert("✅ Correct! 🎉");
    emit("next");
  } else {
    alert("👀 Guess again! 😉");
  }
};
const skip = () => {
  emit("next");
};
</script>

<style scoped>
.question-page {
  display: grid;
  align-content: space-between;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

header {
  margin: 0.5rem 0.5rem 1rem;
}
h2 {
  font-size: 1.5rem;
}

.help-article {
  overflow-y: auto;
  max-height: calc(85vh - 6rem);
}
.question {
  font-size: 2rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}
</style>
