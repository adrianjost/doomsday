<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";

import { watchEffect } from "vue";
import { useMediaQuery } from "@vueuse/core";

const prefersDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
watchEffect(() => {
  document
    .querySelector("html")
    ?.classList.toggle("dark", prefersDarkTheme.value);
});
</script>

<template>
  <main>
    <nav class="border">
      <ul class="nav-items inline text-center">
        <li><RouterLink to="/">Test</RouterLink></li>
        <li><RouterLink to="/train-day">Train Day</RouterLink></li>
        <li><RouterLink to="/train-year">Train Year</RouterLink></li>
      </ul>
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
  grid-template-rows: 3rem auto;
  max-width: 600px;
  margin: 0 auto;
  padding: 0.25rem;
}
nav {
  width: 100%;
  z-index: inherit;
}
nav > ul.nav-items {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  margin-top: 0;
}
nav > ul.nav-items > li {
  margin: 0.25rem 0 0 0 !important;
}
nav > ul.nav-items > li > a:not([aria-current="page"]) {
  border-bottom: 0;
}
</style>
