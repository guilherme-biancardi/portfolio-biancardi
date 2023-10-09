<template>
  <section class="app-section" :style="{ gap: `${gap}px` }">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ gap?: number }>(), {
  gap: 16
});
</script>

<style scoped>
.app-section {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 20px;
}

@media  screen and (max-width: 1024px) {
  .app-section{
    padding: 16px;
    height: 100%;
    padding-bottom: calc(var(--menu-size) + 32px);
  }
}
</style>
