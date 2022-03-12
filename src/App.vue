<script setup lang="ts">
import { RouterView } from "vue-router";

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
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
