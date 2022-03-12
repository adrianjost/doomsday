<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";

import { watchEffect } from "vue";
import { useRegisterSW } from "virtual:pwa-register/vue";

const { needRefresh, updateServiceWorker } = useRegisterSW();
watchEffect(() => {
  if (needRefresh.value) {
    if (confirm("New version available - reload to update?")) {
      updateServiceWorker();
    }
  }
});
</script>

<template>
  <main>
    <nav>
      <RouterLink to="/">Test</RouterLink>
      <RouterLink to="/doomsday">Training</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>

<style scoped>
main {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4rem auto;
}
nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.5rem;
}
nav > * {
  border: 1px solid currentColor;
  border-radius: 0.5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-decoration: none;
}
nav > [aria-current="page"] {
  text-decoration: underline;
  font-weight: bold;
  border-width: 2px;
}
</style>
