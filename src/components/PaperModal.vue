<template>
  <div>
    <label class="border-none" :for="randomID">
      <slot name="toggle"></slot>
    </label>
    <Teleport to="body">
      <input class="modal-state" :id="randomID" type="checkbox" />
      <div class="modal">
        <label class="modal-bg" :for="randomID"></label>
        <div class="modal-body text-center">
          <div class="modal-content">
            <slot name="content" :id="randomID"></slot>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const randomID = ref<string>(`modal-${Math.floor(Math.random() * 1000000)}`);
</script>

<style scoped>
.border-none {
  border: 0;
}
</style>
